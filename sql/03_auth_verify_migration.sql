-- Upgrade existing Just A Click DB for email verification + contact status
-- Run: mysql -u root -p justaclick < sql/03_auth_verify_migration.sql
-- If a column already exists, skip that ALTER and continue.

USE justaclick;

ALTER TABLE users
  ADD COLUMN email_verified TINYINT(1) NOT NULL DEFAULT 0 AFTER role;

ALTER TABLE users
  ADD COLUMN email_verified_at DATETIME NULL AFTER email_verified;

CREATE TABLE IF NOT EXISTS auth_tokens (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id BIGINT UNSIGNED NOT NULL,
  token CHAR(64) NOT NULL,
  type ENUM('email_verify', 'password_reset') NOT NULL DEFAULT 'email_verify',
  expires_at DATETIME NOT NULL,
  used_at DATETIME NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_auth_tokens_token (token),
  KEY idx_auth_tokens_user (user_id),
  KEY idx_auth_tokens_type_expires (type, expires_at),
  CONSTRAINT fk_auth_tokens_user
    FOREIGN KEY (user_id) REFERENCES users (id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
) ENGINE=InnoDB;

ALTER TABLE contact_leads
  ADD COLUMN status ENUM('new', 'read', 'replied', 'archived') NOT NULL DEFAULT 'new' AFTER message;
