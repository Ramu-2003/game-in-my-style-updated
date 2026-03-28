export const cssPhase1Levels = {
  "1": {
    "title": "Style a Heading",
    "description": "Write CSS to style an h1 element. Make the text color blue and add padding of 20px around it. The HTML structure is already provided.",
    "timeLimit": 300,
    "testCases": [
      {
        "id": 1,
        "description": "Set h1 color to blue"
      },
      {
        "id": 2,
        "description": "Set h1 padding to 20px"
      },
      {
        "id": 3,
        "description": "No syntax errors in your CSS"
      }
    ],
    "htmlCode": "<div class=\"container\">\n    <h1>Style Me</h1>\n    <p>Apply CSS styling</p>\n</div>",
    "expectedOutput": "<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        h1 { color: blue; padding: 20px; }\n        .container { margin: 20px; }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <h1>Style Me</h1>\n        <p>Apply CSS styling</p>\n    </div>\n</body>\n</html>",
    "expectedOutputHint": "The h1 text should appear in blue color with padding around it.",
    "starterCode": ""
  },
  "2": {
    "title": "Background & Font Size",
    "description": "Style the .container div with a light gray background color (#f0f0f0) and set the font-size of <p> to 18px.",
    "timeLimit": 300,
    "testCases": [
      {
        "id": 1,
        "description": "Set .container background-color to #f0f0f0"
      },
      {
        "id": 2,
        "description": "Set p font-size to 18px"
      },
      {
        "id": 3,
        "description": "Add padding: 20px to the container"
      }
    ],
    "htmlCode": "<div class=\"container\">\n    <h1>Background Styling</h1>\n    <p>This paragraph should be larger</p>\n</div>",
    "expectedOutput": "<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        .container { background-color: #f0f0f0; padding: 20px; }\n        p { font-size: 18px; }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <h1>Background Styling</h1>\n        <p>This paragraph should be larger</p>\n    </div>\n</body>\n</html>",
    "expectedOutputHint": "The container should have a light gray background and the paragraph text should be larger (18px).",
    "starterCode": ""
  },
  "3": {
    "title": "Text Alignment & Borders",
    "description": "Center-align the h1 text and add a 2px solid red border around the .box div. Also give the box a border-radius of 8px.",
    "timeLimit": 360,
    "testCases": [
      {
        "id": 1,
        "description": "Set h1 text-align to center"
      },
      {
        "id": 2,
        "description": "Add border: 2px solid red to .box"
      },
      {
        "id": 3,
        "description": "Add border-radius: 8px to .box"
      }
    ],
    "htmlCode": "<div class=\"box\">\n    <h1>Centered Heading</h1>\n    <p>Box with border</p>\n</div>",
    "expectedOutput": "<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        h1 { text-align: center; }\n        .box { border: 2px solid red; border-radius: 8px; padding: 20px; }\n    </style>\n</head>\n<body>\n    <div class=\"box\">\n        <h1>Centered Heading</h1>\n        <p>Box with border</p>\n    </div>\n</body>\n</html>",
    "expectedOutputHint": "The heading should be centered and the box should have a rounded red border.",
    "starterCode": ""
  },
  "4": {
    "title": "Flexbox Layout",
    "description": "Use Flexbox to arrange three colored boxes in a row. Set the container to display: flex and justify-content: space-between.",
    "timeLimit": 420,
    "testCases": [
      {
        "id": 1,
        "description": "Set .flex-container to display: flex"
      },
      {
        "id": 2,
        "description": "Set justify-content: space-between on the container"
      },
      {
        "id": 3,
        "description": "Give each .box a width of 100px, height of 100px, and different background colors"
      },
      {
        "id": 4,
        "description": "Set .flex-container to display: flex"
      }
    ],
    "htmlCode": "<div class=\"flex-container\">\n    <div class=\"box box1\">Box 1</div>\n    <div class=\"box box2\">Box 2</div>\n    <div class=\"box box3\">Box 3</div>\n</div>",
    "expectedOutput": "<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        .flex-container { display: flex; justify-content: space-between; padding: 20px; }\n        .box { width: 100px; height: 100px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; }\n        .box1 { background-color: #e74c3c; }\n        .box2 { background-color: #3498db; }\n        .box3 { background-color: #2ecc71; }\n    </style>\n</head>\n<body>\n    <div class=\"flex-container\">\n        <div class=\"box box1\">Box 1</div>\n        <div class=\"box box2\">Box 2</div>\n        <div class=\"box box3\">Box 3</div>\n    </div>\n</body>\n</html>",
    "expectedOutputHint": "Three colored boxes should appear side by side with space between them.",
    "starterCode": ""
  },
  "5": {
    "title": "Hover Effects",
    "description": "Create a button that changes its background color and adds a box-shadow when hovered. Use the :hover pseudo-class.",
    "timeLimit": 480,
    "testCases": [
      {
        "id": 1,
        "description": "Style .btn with background-color: #3498db, color: white, padding: 10px 20px"
      },
      {
        "id": 2,
        "description": "On hover, change background-color to #2980b9"
      },
      {
        "id": 3,
        "description": "On hover, add box-shadow: 0 4px 8px rgba(0,0,0,0.3)"
      },
      {
        "id": 4,
        "description": "Style .btn with background-color: #4db, color: white, padding: 10px 20px"
      }
    ],
    "htmlCode": "<button class=\"btn\">Hover Me</button>",
    "expectedOutput": "<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        .btn {\n            background-color: #3498db;\n            color: white;\n            padding: 10px 20px;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n            font-size: 16px;\n            transition: all 0.3s ease;\n        }\n        .btn:hover {\n            background-color: #2980b9;\n            box-shadow: 0 4px 8px rgba(0,0,0,0.3);\n        }\n    </style>\n</head>\n<body>\n    <button class=\"btn\">Hover Me</button>\n</body>\n</html>",
    "expectedOutputHint": "The button should change appearance when you hover over it — darker background and shadow.",
    "starterCode": ""
  },
  "6": {
    "title": "CSS Selectors - Level 6",
    "description": "Master css selectors in this moderate level challenge.",
    "timeLimit": 480,
    "testCases": [
      {
        "id": 1,
        "description": "Complete CSS Selectors requirement 1 - moderate level"
      },
      {
        "id": 2,
        "description": "Complete CSS Selectors requirement 2 - moderate level"
      },
      {
        "id": 3,
        "description": "Complete CSS Selectors requirement 3 - moderate level"
      },
      {
        "id": 4,
        "description": "Complete CSS Selectors requirement 4 - moderate level"
      }
    ],
    "htmlCode": "<div class=\"container\">\n    <h1>Style Me</h1>\n    <p>Apply CSS Selectors styling</p>\n</div>",
    "expectedOutput": "<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        .container { padding: 20px; }\n        h1 { color: #3498db; }\n        p { color: #7f8c8d; }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <h1>Style Me</h1>\n        <p>Apply CSS Selectors styling</p>\n    </div>\n</body>\n</html>",
    "expectedOutputHint": "The styled output should demonstrate css selectors.",
    "starterCode": ""
  },
  "7": {
    "title": "CSS Selectors - Level 7",
    "description": "Master css selectors in this hard level challenge.",
    "timeLimit": 540,
    "testCases": [
      {
        "id": 1,
        "description": "Complete CSS Selectors requirement 1 - hard level"
      },
      {
        "id": 2,
        "description": "Complete CSS Selectors requirement 2 - hard level"
      },
      {
        "id": 3,
        "description": "Complete CSS Selectors requirement 3 - hard level"
      },
      {
        "id": 4,
        "description": "Complete CSS Selectors requirement 4 - hard level"
      },
      {
        "id": 5,
        "description": "Complete CSS Selectors requirement 5 - hard level"
      }
    ],
    "htmlCode": "<div class=\"container\">\n    <h1>Style Me</h1>\n    <p>Apply CSS Selectors styling</p>\n</div>",
    "expectedOutput": "<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        .container { padding: 20px; }\n        h1 { color: #3498db; }\n        p { color: #7f8c8d; }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <h1>Style Me</h1>\n        <p>Apply CSS Selectors styling</p>\n    </div>\n</body>\n</html>",
    "expectedOutputHint": "The styled output should demonstrate css selectors.",
    "starterCode": ""
  },
  "8": {
    "title": "CSS Selectors - Level 8",
    "description": "Master css selectors in this hard level challenge.",
    "timeLimit": 600,
    "testCases": [
      {
        "id": 1,
        "description": "Complete CSS Selectors requirement 1 - hard level"
      },
      {
        "id": 2,
        "description": "Complete CSS Selectors requirement 2 - hard level"
      },
      {
        "id": 3,
        "description": "Complete CSS Selectors requirement 3 - hard level"
      },
      {
        "id": 4,
        "description": "Complete CSS Selectors requirement 4 - hard level"
      },
      {
        "id": 5,
        "description": "Complete CSS Selectors requirement 5 - hard level"
      }
    ],
    "htmlCode": "<div class=\"container\">\n    <h1>Style Me</h1>\n    <p>Apply CSS Selectors styling</p>\n</div>",
    "expectedOutput": "<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        .container { padding: 20px; }\n        h1 { color: #3498db; }\n        p { color: #7f8c8d; }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <h1>Style Me</h1>\n        <p>Apply CSS Selectors styling</p>\n    </div>\n</body>\n</html>",
    "expectedOutputHint": "The styled output should demonstrate css selectors.",
    "starterCode": ""
  },
  "9": {
    "title": "CSS Selectors - Level 9",
    "description": "Master css selectors in this hard level challenge.",
    "timeLimit": 600,
    "testCases": [
      {
        "id": 1,
        "description": "Complete CSS Selectors requirement 1 - hard level"
      },
      {
        "id": 2,
        "description": "Complete CSS Selectors requirement 2 - hard level"
      },
      {
        "id": 3,
        "description": "Complete CSS Selectors requirement 3 - hard level"
      },
      {
        "id": 4,
        "description": "Complete CSS Selectors requirement 4 - hard level"
      },
      {
        "id": 5,
        "description": "Complete CSS Selectors requirement 5 - hard level"
      }
    ],
    "htmlCode": "<div class=\"container\">\n    <h1>Style Me</h1>\n    <p>Apply CSS Selectors styling</p>\n</div>",
    "expectedOutput": "<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        .container { padding: 20px; }\n        h1 { color: #3498db; }\n        p { color: #7f8c8d; }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <h1>Style Me</h1>\n        <p>Apply CSS Selectors styling</p>\n    </div>\n</body>\n</html>",
    "expectedOutputHint": "The styled output should demonstrate css selectors.",
    "starterCode": ""
  },
  "10": {
    "title": "CSS Selectors - Level 10",
    "description": "Master css selectors in this hard level challenge.",
    "timeLimit": 660,
    "testCases": [
      {
        "id": 1,
        "description": "Complete CSS Selectors requirement 1 - hard level"
      },
      {
        "id": 2,
        "description": "Complete CSS Selectors requirement 2 - hard level"
      },
      {
        "id": 3,
        "description": "Complete CSS Selectors requirement 3 - hard level"
      },
      {
        "id": 4,
        "description": "Complete CSS Selectors requirement 4 - hard level"
      },
      {
        "id": 5,
        "description": "Complete CSS Selectors requirement 5 - hard level"
      }
    ],
    "htmlCode": "<div class=\"container\">\n    <h1>Style Me</h1>\n    <p>Apply CSS Selectors styling</p>\n</div>",
    "expectedOutput": "<!DOCTYPE html>\n<html>\n<head>\n    <style>\n        .container { padding: 20px; }\n        h1 { color: #3498db; }\n        p { color: #7f8c8d; }\n    </style>\n</head>\n<body>\n    <div class=\"container\">\n        <h1>Style Me</h1>\n        <p>Apply CSS Selectors styling</p>\n    </div>\n</body>\n</html>",
    "expectedOutputHint": "The styled output should demonstrate css selectors.",
    "starterCode": ""
  }
};
