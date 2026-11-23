"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function RegisterPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setStatus(t("Please fill in all required fields.", "يرجى ملء جميع الحقول الأساسية."));
      return;
    }
    setStatus(
      t(
        `Welcome, ${name}! Redirecting to Home...`,
        `أهلاً بك يا ${name}! جاري التوجيه للصفحة الرئيسية...`
      )
    );
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
            {t("Create Account", "إنشاء حساب جديد")}
          </h1>
          <p className="text-xs sm:text-sm text-[#7A7067]">
            {t(
              "Join us to curate and track your custom furniture packages",
              "انضم إلينا لتنسيق ومتابعة باقات الأثاث الخاصة بمنزلك"
            )}
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-[#5C534A]">
              {t("Full Name", "الاسم الكامل")}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("Sarah Ahmed", "سارة أحمد")}
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2DDD3] text-sm focus:outline-none focus:border-[#2C2520] transition"
            />
          </div>
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
              {t("Phone Number (Optional)", "رقم الهاتف (اختياري)")}
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+20 100 000 0000"
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
              placeholder={t("Create a strong password", "أنشئ كلمة مرور قوية")}
              className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2DDD3] text-sm focus:outline-none focus:border-[#2C2520] transition"
            />
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
            {t("Create Account", "إنشاء الحساب")}
          </motion.button>
        </form>

        <p className="text-center text-xs text-[#7A7067]">
          {t("Already have an account?", "لديك حساب بالفعل؟")}{" "}
          <Link href="/login" className="text-[#2C2520] font-semibold underline">
            {t("Log In", "تسجيل الدخول")}
          </Link>
        </p>
      </motion.div>
    </div>
  );
}