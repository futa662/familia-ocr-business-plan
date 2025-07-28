import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Familia OCR 事業計画書",
  description: "AI OCRとLLMを融合した革新的な文書処理ソリューション",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}