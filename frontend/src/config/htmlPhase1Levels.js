export const htmlPhase1Levels = {
  "1": {
    "title": "First HTML Document",
    "description": "Create your very first HTML document with the correct basic structure. Every webpage must start with a DOCTYPE declaration, followed by html, head, and body tags.",
    "timeLimit": 300,
    "testCases": [
      {
        "id": 1,
        "description": "Add <!DOCTYPE html> declaration at the top"
      },
      {
        "id": 2,
        "description": "Create <html>, <head>, and <body> tags"
      },
      {
        "id": 3,
        "description": "Add <title>My First Page</title> inside <head>"
      }
    ],
    "expectedOutput": "<!DOCTYPE html>\n<html>\n<head>\n    <title>My First Page</title>\n</head>\n<body>\n</body>\n</html>",
    "starterCode": "<!-- Write your HTML code here -->\n"
  },
  "2": {
    "title": "Hello World",
    "description": "Display a heading and paragraph on your webpage. Use the <h1> tag for the main heading and <p> tag for a paragraph below it.",
    "timeLimit": 300,
    "testCases": [
      {
        "id": 1,
        "description": "Add <h1>Hello World</h1> inside the body"
      },
      {
        "id": 2,
        "description": "Add <p>This is my first webpage</p> below the heading"
      },
      {
        "id": 3,
        "description": "Ensure proper <!DOCTYPE html> structure"
      }
    ],
    "expectedOutput": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Hello World</title>\n</head>\n<body>\n    <h1>Hello World</h1>\n    <p>This is my first webpage</p>\n</body>\n</html>",
    "starterCode": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Hello World</title>\n</head>\n<body>\n    <!-- Add your heading and paragraph here -->\n</body>\n</html>"
  },
  "3": {
    "title": "HTML Links & Images",
    "description": "Add a clickable hyperlink and an image to your webpage. Use <a href='...'>text</a> for links and <img src='...' alt='...'> for images.",
    "timeLimit": 360,
    "testCases": [
      {
        "id": 1,
        "description": "Add a hyperlink: <a href='https://example.com'>Visit Example</a>"
      },
      {
        "id": 2,
        "description": "Add an image tag with src and alt attributes"
      },
      {
        "id": 3,
        "description": "Wrap everything in proper HTML structure with DOCTYPE"
      }
    ],
    "expectedOutput": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Links and Images</title>\n</head>\n<body>\n    <h1>My Links and Images</h1>\n    <a href=\"https://example.com\">Visit Example</a>\n    <img src=\"photo.jpg\" alt=\"A photo\">\n</body>\n</html>",
    "starterCode": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Links and Images</title>\n</head>\n<body>\n    <h1>My Links and Images</h1>\n    <!-- Add your link and image here -->\n</body>\n</html>"
  },
  "4": {
    "title": "HTML Lists",
    "description": "Create both an ordered list (numbered) and an unordered list (bullet points). Use <ol> for ordered and <ul> for unordered, with <li> items inside.",
    "timeLimit": 420,
    "testCases": [
      {
        "id": 1,
        "description": "Create an unordered <ul> list with at least 3 <li> items"
      },
      {
        "id": 2,
        "description": "Create an ordered <ol> list with at least 3 <li> items"
      },
      {
        "id": 3,
        "description": "Add headings above each list"
      },
      {
        "id": 4,
        "description": "Create an unordered <ul> list with at least 4 <li> items"
      }
    ],
    "expectedOutput": "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Lists</title>\n</head>\n<body>\n    <h1>My Favorite Foods</h1>\n    <ul>\n        <li>Pizza</li>\n        <li>Burger</li>\n        <li>Pasta</li>\n    </ul>\n    <h2>Steps to Cook</h2>\n    <ol>\n        <li>Prepare ingredients</li>\n        <li>Cook on medium heat</li>\n        <li>Serve hot</li>\n    </ol>\n</body>\n</html>",
    "starterCode": "<!DOCTYPE html>\n<html>\n<head>\n    <title>HTML Lists</title>\n</head>\n<body>\n    <h1>My Favorite Foods</h1>\n    <!-- Add your unordered list here -->\n    <h2>Steps to Cook</h2>\n    <!-- Add your ordered list here -->\n</body>\n</html>"
  },
  "5": {
    "title": "HTML Table",
    "description": "Build a basic HTML table to display student scores. Use <table>, <tr> for rows, <th> for headers, and <td> for data cells.",
    "timeLimit": 480,
    "testCases": [
      {
        "id": 1,
        "description": "Create a <table> with a header row using <th> tags"
      },
      {
        "id": 2,
        "description": "Add at least 3 data rows using <tr> and <td>"
      },
      {
        "id": 3,
        "description": "Include columns: Name, Subject, and Score"
      },
      {
        "id": 4,
        "description": "Create a <table> with a header row using <th> tags"
      }
    ],
    "expectedOutput": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Student Scores</title>\n</head>\n<body>\n    <h1>Student Scores</h1>\n    <table border=\"1\">\n        <tr>\n            <th>Name</th>\n            <th>Subject</th>\n            <th>Score</th>\n        </tr>\n        <tr>\n            <td>Alice</td>\n            <td>Math</td>\n            <td>95</td>\n        </tr>\n        <tr>\n            <td>Bob</td>\n            <td>Science</td>\n            <td>88</td>\n        </tr>\n        <tr>\n            <td>Carol</td>\n            <td>English</td>\n            <td>91</td>\n        </tr>\n    </table>\n</body>\n</html>",
    "starterCode": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Student Scores</title>\n</head>\n<body>\n    <h1>Student Scores</h1>\n    <!-- Build your table here -->\n</body>\n</html>"
  },
  "6": {
    "title": "HTML Basics - Level 6",
    "description": "Practice html basics in this moderate level challenge.",
    "timeLimit": 480,
    "testCases": [
      {
        "id": 1,
        "description": "Complete HTML Basics requirement 1 - moderate level"
      },
      {
        "id": 2,
        "description": "Complete HTML Basics requirement 2 - moderate level"
      },
      {
        "id": 3,
        "description": "Complete HTML Basics requirement 3 - moderate level"
      },
      {
        "id": 4,
        "description": "Complete HTML Basics requirement 4 - moderate level"
      }
    ],
    "expectedOutput": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Level 6</title>\n</head>\n<body>\n    <h1>Content</h1>\n</body>\n</html>",
    "starterCode": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Level 6</title>\n</head>\n<body>\n    <!-- Write your HTML here -->\n</body>\n</html>"
  },
  "7": {
    "title": "HTML Basics - Level 7",
    "description": "Practice html basics in this hard level challenge.",
    "timeLimit": 540,
    "testCases": [
      {
        "id": 1,
        "description": "Complete HTML Basics requirement 1 - hard level"
      },
      {
        "id": 2,
        "description": "Complete HTML Basics requirement 2 - hard level"
      },
      {
        "id": 3,
        "description": "Complete HTML Basics requirement 3 - hard level"
      },
      {
        "id": 4,
        "description": "Complete HTML Basics requirement 4 - hard level"
      },
      {
        "id": 5,
        "description": "Complete HTML Basics requirement 5 - hard level"
      }
    ],
    "expectedOutput": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Level 7</title>\n</head>\n<body>\n    <h1>Content</h1>\n</body>\n</html>",
    "starterCode": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Level 7</title>\n</head>\n<body>\n    <!-- Write your HTML here -->\n</body>\n</html>"
  },
  "8": {
    "title": "HTML Basics - Level 8",
    "description": "Practice html basics in this hard level challenge.",
    "timeLimit": 600,
    "testCases": [
      {
        "id": 1,
        "description": "Complete HTML Basics requirement 1 - hard level"
      },
      {
        "id": 2,
        "description": "Complete HTML Basics requirement 2 - hard level"
      },
      {
        "id": 3,
        "description": "Complete HTML Basics requirement 3 - hard level"
      },
      {
        "id": 4,
        "description": "Complete HTML Basics requirement 4 - hard level"
      },
      {
        "id": 5,
        "description": "Complete HTML Basics requirement 5 - hard level"
      }
    ],
    "expectedOutput": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Level 8</title>\n</head>\n<body>\n    <h1>Content</h1>\n</body>\n</html>",
    "starterCode": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Level 8</title>\n</head>\n<body>\n    <!-- Write your HTML here -->\n</body>\n</html>"
  },
  "9": {
    "title": "HTML Basics - Level 9",
    "description": "Practice html basics in this hard level challenge.",
    "timeLimit": 600,
    "testCases": [
      {
        "id": 1,
        "description": "Complete HTML Basics requirement 1 - hard level"
      },
      {
        "id": 2,
        "description": "Complete HTML Basics requirement 2 - hard level"
      },
      {
        "id": 3,
        "description": "Complete HTML Basics requirement 3 - hard level"
      },
      {
        "id": 4,
        "description": "Complete HTML Basics requirement 4 - hard level"
      },
      {
        "id": 5,
        "description": "Complete HTML Basics requirement 5 - hard level"
      }
    ],
    "expectedOutput": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Level 9</title>\n</head>\n<body>\n    <h1>Content</h1>\n</body>\n</html>",
    "starterCode": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Level 9</title>\n</head>\n<body>\n    <!-- Write your HTML here -->\n</body>\n</html>"
  },
  "10": {
    "title": "HTML Basics - Level 10",
    "description": "Practice html basics in this hard level challenge.",
    "timeLimit": 660,
    "testCases": [
      {
        "id": 1,
        "description": "Complete HTML Basics requirement 1 - hard level"
      },
      {
        "id": 2,
        "description": "Complete HTML Basics requirement 2 - hard level"
      },
      {
        "id": 3,
        "description": "Complete HTML Basics requirement 3 - hard level"
      },
      {
        "id": 4,
        "description": "Complete HTML Basics requirement 4 - hard level"
      },
      {
        "id": 5,
        "description": "Complete HTML Basics requirement 5 - hard level"
      }
    ],
    "expectedOutput": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Level 10</title>\n</head>\n<body>\n    <h1>Content</h1>\n</body>\n</html>",
    "starterCode": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Level 10</title>\n</head>\n<body>\n    <!-- Write your HTML here -->\n</body>\n</html>"
  }
};