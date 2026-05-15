import type { Metadata } from "next";
import { Inter, Nanum_Myeongjo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const nanumMyeongjo = Nanum_Myeongjo({
  variable: "--font-nanum-myeongjo",
  weight: ["400", "700", "800"],
  subsets: ["latin"],
});

import { Gowun_Batang } from "next/font/google";

const gowunBatang = Gowun_Batang({
  variable: "--font-gowun-batang",
  weight: ["400", "700"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "도초, 바다 — 시간을 잇는 바다의 기록",
  description: "장소와 사람, 도초도의 모든 숨겨진 이야기들을 기록합니다.",
  openGraph: {
    title: "도초, 바다 — 시간을 잇는 바다의 기록",
    description: "장소와 사람, 도초도의 모든 숨겨진 이야기들을 기록합니다.",
    url: "https://docho-kappa.vercel.app/",
    siteName: "도초, 바다",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "도초, 바다 로고",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "도초, 바다 — 시간을 잇는 바다의 기록",
    description: "장소와 사람, 도초도의 모든 숨겨진 이야기들을 기록합니다.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} ${nanumMyeongjo.variable} ${gowunBatang.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
