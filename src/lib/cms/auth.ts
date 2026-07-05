// Simple auth for CMS admin
// In production, use proper auth with hashed passwords and JWT

const ADMIN_CREDENTIALS = {
  email: "tjms.kp@gmail.com",
  password: "password",
};

export interface AuthResult {
  success: boolean;
  token?: string;
  error?: string;
}

export function validateCredentials(email: string, password: string): AuthResult {
  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    // Simple token (in production use JWT)
    const token = Buffer.from(`${email}:${Date.now()}`).toString("base64");
    return { success: true, token };
  }
  return { success: false, error: "Invalid email or password" };
}

export function validateToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, "base64").toString();
    const [email] = decoded.split(":");
    return email === ADMIN_CREDENTIALS.email;
  } catch {
    return false;
  }
}
