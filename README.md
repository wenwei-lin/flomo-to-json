# Flomo to JSON

This is a simple JS script that converts a Flomo export file to a JSON file.

## Installation

1. Clone this repository.
2. Run `yarn` in the cloned directory.

## Usage

1. Export your Flomo data as HTML ([See Flomo Website for more detail](https://help.flomoapp.com/basic/storage.html)). Save it in current directory.
2. Change the constant `FlomoFileName` in `index.js` to the path of your Flomo export file.
3. Run `node index.js`.

## Output

The script will output a JSON file named `flomo.json` in the current directory.

```json
[
    {
        "content": "This is a test note",
        "created_at": "2024-10-19 21:18:41",
        "tags": [
            "test"
        ]
    }
]
```