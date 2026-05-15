import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const runtime = 'nodejs'; // Use nodejs runtime to use fs

export const alt = '도초, 바다 — 시간을 잇는 바다의 기록';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  // 로컬 폰트 파일을 읽어옵니다.
  const fontData = await readFile(
    join(process.cwd(), 'public/NanumMyeongjo.ttf')
  );

  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Nanum Myeongjo',
        }}
      >
        {/* Main Logo Group */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          {/* Island/Fish Icon */}
          <div style={{ display: 'flex', width: '80px', height: '80px', marginRight: '24px' }}>
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
              <path 
                d="M10,70 Q20,30 50,20 T90,70 L85,75 Q80,65 70,70 T50,75 T30,70 T15,75 Z" 
                fill="#003366" 
              />
              <circle cx="35" cy="50" r="2" fill="white" />
            </svg>
          </div>
          
          {/* Text Group */}
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '96px', fontWeight: 700, color: '#003366' }}>
            <span>도초</span>
            {/* Stylized Comma */}
            <div style={{ display: 'flex', width: '40px', height: '40px', margin: '24px 8px 0 8px' }}>
              <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                <path 
                  d="M50,25 C40,25 35,35 35,45 C35,55 42,65 52,65 C58,65 65,60 68,55 C68,75 55,90 30,100 L40,95 C60,85 75,75 75,45 C75,35 65,25 50,25 Z" 
                  fill="#003366" 
                />
              </svg>
            </div>
            <span>바다</span>
          </div>
        </div>
        
        {/* Tagline */}
        <div 
          style={{ 
            fontSize: '36px', 
            color: '#667085', 
            marginTop: '12px',
            letterSpacing: '0.05em'
          }}
        >
          시간을 잇는 바다의 기록
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Nanum Myeongjo',
          data: fontData,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  );
}
