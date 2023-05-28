import { ImageResponse } from '@vercel/og';
 
export const config = {
  runtime: 'edge',
};
 
export default function () {
  return new ImageResponse(
    (
      <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'radial-gradient(#4E98D5,#CF684A)',
        fontSize: 32,
        fontWeight: 600,
      }}
    >
    </div>
    ),
    {
      width: 800,
      height: 400,
    },
  );
}