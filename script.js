document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("bg");

    const gl =
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");

    if (!gl) {
        console.error("WebGL no disponible");
        return;
    }

    const vertexSource =
        document.getElementById("vertex-shader").textContent;

    const fragmentSource =
        document.getElementById("fragment-shader").textContent;

    function compile(type, source) {

        const shader = gl.createShader(type);

        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        return shader;
    }

    const vertexShader =
        compile(gl.VERTEX_SHADER, vertexSource);

    const fragmentShader =
        compile(gl.FRAGMENT_SHADER, fragmentSource);

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

    const position =
        gl.getAttribLocation(program, "a_position");

    gl.enableVertexAttribArray(position);

    gl.vertexAttribPointer(
        position,
        2,
        gl.FLOAT,
        false,
        0,
        0
    );

    const timeLocation =
        gl.getUniformLocation(program, "u_time");

    const resolutionLocation =
        gl.getUniformLocation(program, "u_resolution");

    function resize() {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        gl.viewport(
            0,
            0,
            canvas.width,
            canvas.height
        );
    }

    resize();

    window.addEventListener(
        "resize",
        resize
    );

    const start = performance.now();

    function render() {

        const time =
            (performance.now() - start) / 1000;

        gl.uniform1f(
            timeLocation,
            time
        );

        gl.uniform2f(
            resolutionLocation,
            canvas.width,
            canvas.height
        );

        gl.drawArrays(
            gl.TRIANGLES,
            0,
            6
        );

        requestAnimationFrame(render);
    }

    render();
});