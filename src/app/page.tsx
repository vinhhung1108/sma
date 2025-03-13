import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Giới Thiệu SMA Vina</title>
        <meta
          name="description"
          content="Công ty chuyên thiết kế và thi công công trình nhà ở với chất lượng hàng đầu."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center">
          Giới Thiệu SMA Vina – Chất Lượng Làm Nên Uy Tín
        </h1>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">Về Chúng Tôi</h2>
          <p>
            SMA Vina là công ty chuyên thiết kế và thi công công trình nhà ở,
            với sứ mệnh đặt chất lượng lên hàng đầu...
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">Dịch Vụ Của Chúng Tôi</h2>
          <ul className="list-disc ml-5">
            <li>Thiết kế kiến trúc & nội thất</li>
            <li>Thi công trọn gói</li>
            <li>Cải tạo, nâng cấp công trình</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">Tại Sao Chọn SMA Vina?</h2>
          <ul className="list-disc ml-5">
            <li>Kinh nghiệm thực chiến</li>
            <li>Đội ngũ chuyên nghiệp</li>
            <li>Vật liệu & công nghệ tiên tiến</li>
            <li>Tiến độ & chi phí tối ưu</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold">Liên Hệ Với Chúng Tôi</h2>
          <p>📍 Địa chỉ: …</p>
          <p>📞 Hotline: 0905720520, 0931124789</p>
          <p>📧 Email: …</p>
          <p>🌍 Website: …</p>
        </section>
      </div>
    </>
  );
}
