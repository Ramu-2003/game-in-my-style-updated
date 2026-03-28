// API Keys Configuration for Load Balancing
// Each course has its own set of API keys to distribute load

const API_KEYS = {
  html: [
    process.env.HTML_API_KEY_1,
    process.env.HTML_API_KEY_2,
    process.env.HTML_API_KEY_3,
  ].filter(Boolean), // Remove undefined keys
  
  css: [
    process.env.CSS_API_KEY_1,
    process.env.CSS_API_KEY_2,
  ].filter(Boolean),
  
  javascript: [
    process.env.JS_API_KEY_1,
    process.env.JS_API_KEY_2,
  ].filter(Boolean),
  
  python: [
    process.env.PYTHON_API_KEY_1,
    process.env.PYTHON_API_KEY_2,
  ].filter(Boolean),
  
  java: [
    process.env.JAVA_API_KEY_1,
    process.env.JAVA_API_KEY_2,
  ].filter(Boolean),
};

// Available models in priority order (best to fastest)
// All 10 Groq models for maximum fallback capacity
const MODELS = [
  'llama-3.3-70b-versatile',      // Latest, most accurate (70B)
  'llama-3.2-90b-text-preview',   // Newest, largest (90B) - Preview
  'llama-3.1-70b-versatile',      // Previous version (70B)
  'mixtral-8x7b-32768',           // Mixtral MoE, large context (32K)
  'llama3-70b-8192',              // Llama 3 with 8K context
  'llama-3.2-11b-text-preview',   // Good middle ground (11B) - Preview
  'llama-3.1-8b-instant',         // Fast, smaller model (8B)
  'llama3-8b-8192',               // Llama 3 smaller version
  'gemma2-9b-it',                 // Google Gemma 2 (9B)
  'gemma-7b-it',                  // Google Gemma (7B)
];

// Track usage count for round-robin load balancing
const usageCount = {
  html: 0,
  css: 0,
  javascript: 0,
  python: 0,
  java: 0,
};

/**
 * Get an API key for a specific course using round-robin load balancing
 * @param {string} course - Course name (html, css, javascript, python, java)
 * @returns {string|null} API key or null if none available
 */
const getApiKey = (course) => {
  const keys = API_KEYS[course];
  
  if (!keys || keys.length === 0) {
    console.error(`No API keys configured for course: ${course}`);
    return null;
  }
  
  // Round-robin: get next key in rotation
  const index = usageCount[course] % keys.length;
  usageCount[course]++;
  
  const selectedKey = keys[index];
  console.log(`[API Key] Course: ${course}, Using key #${index + 1}/${keys.length}`);
  
  return selectedKey;
};

/**
 * Get all API keys for a course (for fallback scenarios)
 * @param {string} course - Course name
 * @returns {Array<string>} Array of API keys
 */
const getAllApiKeys = (course) => {
  return API_KEYS[course] || [];
};

/**
 * Get all available models
 * @returns {Array<string>} Array of model names
 */
const getModels = () => {
  return [...MODELS];
};

/**
 * Get the primary (best) model
 * @returns {string} Primary model name
 */
const getPrimaryModel = () => {
  return MODELS[0];
};

/**
 * Try API call with automatic fallback across models and keys
 * @param {string} course - Course name
 * @param {Function} apiCallFn - Function that makes the API call (receives apiKey and model)
 * @returns {Promise<any>} API response
 */
const tryWithFallback = async (course, apiCallFn) => {
  const keys = getAllApiKeys(course);
  
  if (keys.length === 0) {
    throw new Error(`No API keys configured for course: ${course}`);
  }
  
  // Try each key
  for (let keyIndex = 0; keyIndex < keys.length; keyIndex++) {
    const apiKey = keys[keyIndex];
    
    // Try each model with this key
    for (let modelIndex = 0; modelIndex < MODELS.length; modelIndex++) {
      const model = MODELS[modelIndex];
      
      try {
        console.log(`[Attempt] Course: ${course}, Key: #${keyIndex + 1}/${keys.length}, Model: ${model}`);
        
        const result = await apiCallFn(apiKey, model);
        
        console.log(`[Success] Course: ${course}, Key: #${keyIndex + 1}, Model: ${model}`);
        return result;
        
      } catch (error) {
        const isRateLimit = error.response?.status === 429 || 
                           error.message?.includes('rate limit') ||
                           error.message?.includes('429');
        
        if (isRateLimit) {
          console.log(`[Rate Limit] Key #${keyIndex + 1}, Model: ${model} - Trying next...`);
          continue; // Try next model
        } else {
          // Non-rate-limit error, log and try next anyway
          console.error(`[Error] Key #${keyIndex + 1}, Model: ${model}:`, error.message);
          continue;
        }
      }
    }
  }
  
  // All keys and models exhausted
  throw new Error(`All API keys and models exhausted for course: ${course}. Please try again later.`);
};

/**
 * Check if API keys are configured for a course
 * @param {string} course - Course name
 * @returns {boolean} True if at least one key is configured
 */
const hasApiKeys = (course) => {
  const keys = API_KEYS[course];
  return keys && keys.length > 0;
};

/**
 * Get API key count for a course
 * @param {string} course - Course name
 * @returns {number} Number of configured keys
 */
const getApiKeyCount = (course) => {
  const keys = API_KEYS[course];
  return keys ? keys.length : 0;
};

module.exports = {
  getApiKey,
  getAllApiKeys,
  getModels,
  getPrimaryModel,
  tryWithFallback,
  hasApiKeys,
  getApiKeyCount,
};
