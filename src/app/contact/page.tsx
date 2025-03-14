"use client";

import Head from "next/head";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Đang gửi...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Gửi thành công!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Có lỗi xảy ra, vui lòng thử lại!");
      }
    } catch (error) {
      setStatus("Lỗi kết nối, vui lòng thử lại!");
    }
  };

  return (
    <>
      <Head>
        <title>Liên Hệ - SMA Vina</title>
        <meta
          name="description"
          content="Liên hệ với SMA Vina để nhận tư vấn thiết kế và thi công."
        />
      </Head>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Liên Hệ Chúng Tôi
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Họ và Tên"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              name="message"
              placeholder="Lời nhắn của bạn"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Gửi Yêu Cầu
            </button>
            {status && (
              <p className="text-center text-sm text-gray-600 mt-2">{status}</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
