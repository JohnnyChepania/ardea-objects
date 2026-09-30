import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'ARDEA OBJECTS — предметы для пространства', description: 'Мебель и объекты с чистой формой, натуральными материалами и вниманием к каждой детали.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ru"><body>{children}</body></html>; }
