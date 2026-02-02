const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const img = document.getElementById('sourceImage');

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };

        function getImageData() {
            return ctx.getImageData(0, 0, canvas.width, canvas.height);
        }

        function updateImage(data) {
            ctx.putImageData(data, 0, 0);
        }

        function toGrayscale() {
            const imgData = getImageData();
            const data = imgData.data;
            for (let i = 0; i < data.length; i += 4) {
                let avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                data[i] = data[i + 1] = data[i + 2] = avg;
            }
            updateImage(imgData);
        }

        function increaseBrightness() {
            const imgData = getImageData();
            const data = imgData.data;
            for (let i = 0; i < data.length; i += 4) {
                data[i] += 30;     //* Red
                data[i + 1] += 30;   //* Green
                data[i + 2] += 30;   //* Blue
            }
            updateImage(imgData);
        }

        function increaseContrast() {
            const imgData = getImageData();
            const data = imgData.data;
            let contrast = 1.2;
            let factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
            for (let i = 0; i < data.length; i += 4) {
                data[i] = factor * (data[i] - 128) + 128;
                data[i + 1] = factor * (data[i + 1] - 128) + 128;
                data[i + 2] = factor * (data[i + 2] - 128) + 128;
            }
            updateImage(imgData);
        }

        function invertColors() {
            const imgData = getImageData();
            const data = imgData.data;
            for (let i = 0; i < data.length; i += 4) {
                data[i] = 255 - data[i];       //* Red
                data[i + 1] = 255 - data[i + 1];   //* Green
                data[i + 2] = 255 - data[i + 2];   //* Blue
            }
            updateImage(imgData);
        }

        function vignette() {
            const imgData = getImageData();
            const data = imgData.data;
            const w = canvas.width;
            const h = canvas.height;
            const centerX = w / 2;
            const centerY = h / 2;
            const maxDist = Math.sqrt(centerX ** 2 + centerY ** 2);

            for (let y = 0; y < h; y++) {
                for (let x = 0; x < w; x++) {
                    const i = (y * w + x) * 4;
                    const dx = centerX - x;
                    const dy = centerY - y;
                    const dist = Math.sqrt(dx ** 2 + dy ** 2);
                    const factor = dist / maxDist;
                    data[i] *= (1 - factor * 0.5);
                    data[i + 1] *= (1 - factor * 0.5);
                    data[i + 2] *= (1 - factor * 0.5);
                }
            }
            updateImage(imgData);
        }