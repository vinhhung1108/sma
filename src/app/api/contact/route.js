import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Cấu hình tài khoản email gửi đi (cần Gmail hoặc SMTP server khác)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Email của bạn
        pass: process.env.EMAIL_PASS, // Mật khẩu ứng dụng Gmail
      },
    });

    // Cấu hình nội dung email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "smaxddn@gmail.com",
      subject: `Liên hệ từ ${name}`,
      text: `Tên: ${name}\nEmail: ${email}\nLời nhắn:\n${message}`,
    };

    // Gửi email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Gửi thành công!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Lỗi gửi email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Gửi thất bại!" }),
      { status: 500 }
    );
  }
}
