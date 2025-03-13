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

      <div className="min-h-screen bg-gray-100 text-gray-900">
        {/* Hero Section */}
        <div
          className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/images/morden-house-01.jpg')" }}
        >
          <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center text-white">
            <h1 className="text-4xl font-bold">
              SMA Vina - Chất Lượng Làm Nên Uy Tín
            </h1>
            <p className="mt-2 text-lg">
              Chuyên thiết kế & thi công công trình nhà ở hiện đại
            </p>
          </div>
        </div>

        {/* Dịch vụ */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-semibold mb-8">Dịch Vụ Của Chúng Tôi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Thiết kế kiến trúc & nội thất",
                desc: "Sáng tạo, tối ưu công năng, phù hợp phong cách sống.",
                icon: "🏠",
              },
              {
                title: "Thi công trọn gói",
                desc: "Từ phần thô đến hoàn thiện, đảm bảo chất lượng cao.",
                icon: "🔨",
              },
              {
                title: "Cải tạo, nâng cấp",
                desc: "Giúp không gian cũ trở nên hiện đại và tiện nghi hơn.",
                icon: "🛠",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center"
              >
                <span className="text-4xl">{service.icon}</span>
                <h3 className="text-xl font-semibold mt-3">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dự Án Tiêu Biểu */}
        <section className="py-16 bg-gray-200 text-center">
          <h2 className="text-3xl font-semibold mb-8">Dự Án Tiêu Biểu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {["/project1.jpg", "/project2.jpg", "/project3.jpg"].map(
              (img, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={img}
                    alt={`Dự án ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              )
            )}
          </div>
        </section>

        {/* Liên Hệ */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-semibold mb-6">Liên Hệ Với Chúng Tôi</h2>
          <p className="text-lg mb-4">📍 Địa chỉ: …</p>
          <p className="text-lg mb-4">📞 Hotline: 0905720520, 0931124789</p>
          <p className="text-lg mb-4">📧 Email: …</p>
          <a
            href="tel:0905720520"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-blue-700 transition"
          >
            Gọi Ngay
          </a>
        </section>
      </div>
    </>
  );
}
