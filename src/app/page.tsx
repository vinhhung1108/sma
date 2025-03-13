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
          <div
            className="p-6 rounded-lg text-center text-white"
            style={{ backgroundColor: "rgba(37, 99, 235, 0.8)" }}
          >
            <h1 className="text-4xl font-bold">SMA VINA</h1>

            <p className="mt-2 text-lg">
              Công ty TNHH thiết kế và xây dựng SMA
            </p>
            <p className="mt-2 text-lg">
              Chuyên thiết kế & thi công công trình nhà ở hiện đại
            </p>
            <h2 className="mt-2 text-lg">Chất Lượng Làm Nên Uy Tín</h2>
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
        {/* Block Giới Thiệu Công Ty */}
        <section className="py-16 bg-white text-center mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Về Chúng Tôi</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              SMA Vina là công ty chuyên thiết kế và thi công công trình nhà ở,
              với sứ mệnh đặt chất lượng lên hàng đầu. Chúng tôi không chỉ tạo
              ra những không gian sống đẹp mắt mà còn đảm bảo sự bền vững, tiện
              nghi theo thời gian.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Với kinh nghiệm qua nhiều công trình thực tế, SMA Vina đã không
              ngừng cải tiến quy trình thiết kế và thi công, đúc rút được những
              giải pháp tối ưu cho công trình dân dụng.
            </p>
          </div>
        </section>

        {/* Dự Án Tiêu Biểu */}
        <section className="py-16 bg-gray-200 text-center">
          <h2 className="text-3xl font-semibold mb-8">Dự Án Tiêu Biểu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "images/project01.jpg",
              "images/project02.jpg",
              "images/project03.jpg",
            ].map((img, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={img}
                  alt={`Dự án ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Liên Hệ */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-semibold mb-6">Liên Hệ Với Chúng Tôi</h2>
          <p className="text-lg mb-4">
            📍 Địa chỉ: Phường An Khê, Quận Thanh Khê, TP. Đà Nẵng
          </p>
          <p className="text-lg mb-4">📞 Hotline: 0905720520, 0931124789</p>
          <p className="text-lg mb-4">📧 Email:smaxddn@gmail.com</p>
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
