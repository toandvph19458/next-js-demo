import React, { useState } from 'react';
import { parseSync } from 'svgson';
import { DotLottie } from '@dotlottie/dotlottie-js';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
export default function UploadAndConvert() {
  const [json, setJson] = useState<any>(null);

  const handleFileChange = async (event:any) => {
    const file = event.target.files[0];
    if (file && file.type === 'image/svg+xml') {
      const reader = new FileReader();
      reader.onload = (e:any) => {
        const svgText = e.target.result;
        const svgJson = parseSync(svgText);
        setJson(svgJson);
      };
      reader.readAsText(file);
    } else {
      alert('Please upload a valid SVG file');
    }
  };

  const createDotLottie = async () => {
    const dotLottie = new DotLottie();

    await dotLottie
      .setAuthor('Joe')
      .setVersion('1.0')
      .addAnimation({
        id: 'animation_1',
        data: json,
        autoplay: true,
      })
      .build()
      .then((value) => {
        value.download('animation.lottie');
      });
  };

  return (
    <div className="upload-converter">
      <input type="file" accept=".svg" onChange={handleFileChange} />
      {json && (
        <div>
          <h3>Converted JSON:</h3>
          <pre>{JSON.stringify(json, null, 2)}</pre>
          <DotLottieReact
      src={''}
      loop
      autoplay
    />
          <button onClick={createDotLottie}>Download dotLottie!</button>
        </div>
      )}
    </div>
  );
}
