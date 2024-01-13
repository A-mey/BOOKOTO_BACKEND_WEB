class LoginSchema {


    constructor() { }

    public readonly schema = {
        "otpotp" : {
            "type": "object",
            "additionalProperties": false,
            "required": ["EMAILID"],
            "properties" : {
                "EMAILID": {
                    "type": "string",
                    "format": "email"
                }
            },
        },

        "otpverification": {
            "type": "object",
            "additionalProperties": false,
            "required": ["EMAILID", "HASH", "OTP"],
            "properties" : {
                "EMAILID": {
                    "type": "string",
                    "format": "email"
                },
                "HASH": {
                    "type": "string",
                },
                "OTP": {
                    "type": "string",
                },
            },
        },
        "loginregistration": {
            "type": "object",
            "additionalProperties": false,
            "required": ["EMAILID", "PASSWORD", "FIRSTNAME", "GENDER", "DOB"],
            "properties" : {
                "TITLE": {
                    "type": "number",
                    "enum": [1, 2, 3]
                },
                "EMAILID": {
                    "type": "string",
                    "format": "email"
                },
                "PASSWORD": {
                    "type": "string",
                },
                "PASSWORD2": {
                    "type": "string",
                },
                "FIRSTNAME": {
                    "type": "string"
                },
                "LASTNAME": {
                    "type": "string"
                },
                "GENDER": {
                    "type": "number",
                    "enum": [1, 2]
                },
                "DOB": {
                    "type": "string",
                }
            },
        },

        "loginlogin": {
            "type": "object",
            "additionalProperties": false,
            "required": ["EMAILID", "PASSWORD"],
            "properties" : {
                "EMAILID": {
                    "type": "string",
                    "format": "email"
                },
                "PASSWORD": {
                    "type": "string",
                }
            },
        }
    };
}

export default new LoginSchema();