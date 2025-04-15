CREATE TABLE IF NOT EXISTS otp_codes (
  id SERIAL PRIMARY KEY,
  otp_code VARCHAR(6) NOT NULL,        -- Le code OTP généré
  used boolean null default false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(), -- Date de création
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL
);
