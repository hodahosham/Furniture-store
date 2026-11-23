"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function LoginPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [status, setStatus] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setStatus(t("Please fill in all fields.", "يرجى ملء جميع الحقول المطلوبة."));
      return;
    }
    setStatus(t("Logged in successfully! Redirecting...", "تم تسجيل الدخول بنجاح! جاري التوجيه..."));
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-10 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white p-6 sm:p-10 rounded-2xl border border-[#E8E2D9] shadow-sm space-y-6"
      >
        <div className="space-y-2 text-center">
          <h1 className="text-2xl sm:text-3xl font-serif text-[#2C2520]">
            {t("Welcome Back", "مرحباً بعودتك")}
          </h1>
          <p className="text-xs sm:text-sm text-[#7A7067]">
            {t("Log in to manage your saved rooms and orders", "سجّل الدخول لإدارة غرفك المحفوظة وطلباتك")}
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-[#5C534A]">
              {t("Email Address", "البريد الإلكتروني")}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2DDD3] text-sm focus:outline-none focus:border-[#2C2520] transition"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-[#5C534A]">
              {t("Password", "كلمة المرور")}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2DDD3] text-sm focus:outline-none focus:border-[#2C2520] transition"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-[#6E655D]">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-[#D6CFC5]"
              />
              <span>{t("Remember me", "تذكرني")}</span>
            </label>
            <button
              type="button"
              onClick={() =>
                setStatus(
                  t(
                    "Password reset link sent to your email.",
                    "تم إرسال رابط استعادة كلمة المرور لبريدك."
                  )
                )
              }
              className="hover:text-[#2C2520] underline cursor-pointer"
            >
              {t("Forgot password?", "نسيت كلمة المرور؟")}
            </button>
          </div>

          {status && (
            <p className="text-xs font-medium text-center text-[#2C2520] bg-[#EFECE6] py-2.5 px-3 rounded-lg">
              {status}
            </p>
          )}

          <motion.button
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3.5 rounded-xl bg-[#2C2520] text-[#FAF8F5] text-sm font-medium hover:bg-[#423830] transition mt-2 cursor-pointer"
          >
            {t("Log In", "تسجيل الدخول")}
          </motion.button>
        </form>

        <p className="text-center text-xs text-[#7A7067]">
          {t("Don't have an account?", "ليس لديك حساب؟")}{" "}
          <Link href="/register" className="text-[#2C2520] font-semibold underline">
            {t("Register", "أنشئ حساباً الآن")}
          </Link>
        </p>
      </motion.div>
    </div>
  );
}