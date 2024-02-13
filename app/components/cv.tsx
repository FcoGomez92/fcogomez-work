export const CVButton: React.FC = () => {

  const handleDownload = () => {
    const filePath = '/cv.pdf';
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'fcogomez_cv.pdf';
    link.click();
  };

  return (
    <button className='inline-flex h-full cursor-pointer items-center justify-center rounded-md border border-slate-300 bg-[linear-gradient(110deg,#cfcfcf,45%,#4D4B4B,55%,#cfcfcf)] bg-[length:250%_100%] px-3 py-1 text-sm font-medium text-grey-300 backdrop-blur-3xl hover:opacity-70 duration-300' onClick={handleDownload}>
      Download CV
    </button>
  );
};

