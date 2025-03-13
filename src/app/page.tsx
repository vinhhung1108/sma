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

      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 text-white flex flex-col items-center justify-center px-6 py-12">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-6">
          Giới Thiệu SMA Vina
        </h1>
        <p className="text-lg text-center max-w-2xl">
          Chúng tôi chuyên thiết kế và thi công công trình nhà ở với chất lượng
          hàng đầu, tạo nên không gian sống bền vững và tiện nghi.
        </p>

        {/* Dịch vụ */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {[
            {
              title: "Thiết kế kiến trúc & nội thất",
              desc: "Sáng tạo, tối ưu công năng, phù hợp phong cách sống.",
            },
            {
              title: "Thi công trọn gói",
              desc: "Từ phần thô đến hoàn thiện, đảm bảo chất lượng cao.",
            },
            {
              title: "Cải tạo, nâng cấp",
              desc: "Giúp không gian cũ trở nên hiện đại và tiện nghi hơn.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="tel:0905720520"
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-yellow-500 transition"
          >
            Liên Hệ Ngay: 0905 720 520
          </a>
        </div>
      </div>
    </>
  );
}
