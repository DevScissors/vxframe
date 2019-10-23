"use strict";

CX.DEFAULT_PASSWORD = "vxframe"

CX.MAILGUN_API = "https://api.mailgun.net/v2"

CX.MAILGUN_PRIVATE_API_KEY = process.env.MAILGUN_PRIVATE_API_KEY
CX.MAILGUN_PUBLIC_API_KEY = process.env.MAILGUN_PUBLIC_API_KEY
CX.MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN

CX.TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
CX.TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
CX.TWILIO_FROM_PHONE = process.env.TWILIO_FROM_PHONE

CX.TWILIO_ACCOUNT_SID_TEST = process.env.TWILIO_ACCOUNT_SID_TEST
CX.TWILIO_AUTH_TOKEN_TEST = process.env.TWILIO_AUTH_TOKEN_TEST
CX.TWILIO_FROM_PHONE_TEST = process.env.TWILIO_FROM_PHONE_TEST

CX.TWILIO_API_URL_PREFIX = "https://api.twilio.com/2010-04-01/Accounts"
CX.TWILIO_API_URL_SUFFIX = "Messages.json"

CX.PKGCLOUD_CONTAINER = "vxframe"
