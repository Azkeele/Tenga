document.addEventListener("DOMContentLoaded", () => {

    let canvas =
        document.getElementById("glscreen") ||
        document.getElementById("bg");

    if (!canvas) {
        console.error("No se encontró ningún canvas.");
        return;
    }

    if (!(canvas instanceof HTMLCanvasElement)) {
        console.error("El elemento encontrado no es un canvas.");
        return;
    }

    const gl =
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");

    if (!gl) {
        console.error("WebGL no está disponible.");
        return;
    }

    const vertexScript = document.getElementById("2d-vertex-shader");
    const fragmentScript = document.getElementById("2d-fragment-shader");

    if (!vertexScript || !fragmentScript) {
        console.error("No se encontraron los shaders.");
        return;
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        gl.viewport(
            0,
            0,
            gl.drawingBufferWidth,
            gl.drawingBufferHeight
        );
    }

    resizeCanvas();

    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexScript.textContent);
    gl.compileShader(vertexShader);

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentScript.textContent);
    gl.compileShader(fragmentShader);

    const program = gl.createProgram();

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

    gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([
            -1, -1,
             1, -1,
            -1,  1,

            -1,  1,
             1, -1,
             1,  1
        ]),
        gl.STATIC_DRAW
    );

    const positionLocation =
        gl.getAttribLocation(program, "a_position");

    gl.enableVertexAttribArray(positionLocation);

    gl.vertexAttribPointer(
        positionLocation,
        2,
        gl.FLOAT,
        false,
        0,
        0
    );

    const locationOfTime =
        gl.getUniformLocation(program, "u_time");

    const locationOfResolution =
        gl.getUniformLocation(program, "u_resolution");

    const startTime = Date.now();

    function render() {

        const currentTime =
            (Date.now() - startTime) / 1000;

        gl.uniform1f(locationOfTime, currentTime);

        gl.uniform2f(
            locationOfResolution,
            canvas.width,
            canvas.height
        );

        gl.drawArrays(gl.TRIANGLES, 0, 6);

        requestAnimationFrame(render);
    }

    window.addEventListener("resize", resizeCanvas);

    render();
});