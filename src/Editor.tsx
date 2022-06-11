import {FC, useState} from "react";

interface Props {
    // default values for image filters
    imgBlur?: number,
    imgBrightness?: number,
    imgConstrast?: number,
    imgGrayscale?: number,
    imgHueRotate?: number,
    imgInvert?: number,
    imgOpacity?: number,
    imgSaturate?: number,
    imgSepia?: number,
    // important default values
    imgUrl?: string,
    imgWidth?: number,
    imgTop?: number,
    imgLeft?: number,
    textTop?: number,
    textLeft?: number,
    textColor?: string,
    textRows?: number,
    textCols?: number
}

const Editor: FC<Props> = props => {
    // image filters
    const [imgBlur,setImgBlur] = useState(props.imgBlur ?? 0); // px
    const [imgBrightness,setImgBrightness] = useState(props.imgBrightness ?? 100); // %
    const [imgContrast,setImgConstrast] = useState(props.imgConstrast ?? 100); // %
    const [imgGrayscale,setImgGrayscale] = useState(props.imgGrayscale ?? 0); // % (0-100)
    const [imgHueRotate,setImgHueRotate] = useState(props.imgHueRotate ?? 0); // deg (0-360)
    const [imgInvert,setImgInvert] = useState(props.imgInvert ?? 0); // % (0-100)
    const [imgOpacity,setImgOpacity] = useState(props.imgOpacity ?? 100); // % (0-100)
    const [imgSaturate,setImgSaturate] = useState(props.imgSaturate ?? 100); // % (0-100)
    const [imgSepia,setImgSepia] = useState(props.imgSepia ?? 0); // % (0-100)
    // important values
    const [imgUrl,setImgUrl] = useState(props.imgUrl ?? '');
    const [imgWidth,setImgWidth] = useState(props.imgWidth ?? 1280);
    const [imgTop,setImgTop] = useState(props.imgTop ?? 50);
    const [imgLeft,setImgLeft] = useState(props.imgLeft ?? 50);
    const [textTop,setTextTop] = useState(props.textTop ?? 25);
    const [textLeft,setTextLeft] = useState(props.textLeft ?? 25);
    const [textColor,setTextColor] = useState(props.textColor ?? "black");
    const [textRows,setTextRows] = useState(props.textRows ?? 50);
    const [textCols,setTextCols] = useState(props.textCols ?? 200);
    const [hideImage,setHideImage] = useState(false);
    // textarea
    const [text,setText] = useState("");
    return (
        <>
        <h1>ASCII Outline Editor</h1>
        <div style={{
            position: "absolute",
            top: "64px"
        }}> {/* header with controls */}
            <h2>Controls</h2>
            <table>
            <tr>
                <td>
                    <button onClick={() => setHideImage(!hideImage)}>{hideImage ? "Show" : "Hide"} Image</button><br />
                </td>
                <td colSpan={2}>
                    Image URL: <input onChange={e => setImgUrl(e.target.value)} value={imgUrl} />
                </td>
                <td></td>
                <td>Image Filters</td>
            </tr>
            <tr>
                <td>
                    Text Rows: <input type={"number"} min={1} max={200} onChange={e => {
                        setTextRows(Number.parseInt(e.target.value));
                    }} value={textRows} style={{width:"64px"}} />
                </td>
                <td colSpan={2}>
                    Image Width: <input type={"number"} min={1} max={10000} onChange={e => {
                        setImgWidth(Number.parseInt(e.target.value));
                    }} value={imgWidth} style={{width:"64px"}} />
                </td>
                <td>
                    Blur: <input type={"number"} min={0} max={1000} onChange={e => {
                        setImgBlur(Number.parseInt(e.target.value));
                    }} value={imgBlur} style={{width:"64px"}} />
                </td>
                <td>
                    Grayscale: <input type={"number"} min={0} max={100} onChange={e => {
                        setImgGrayscale(Number.parseInt(e.target.value));
                    }} value={imgGrayscale} style={{width:"64px"}} />
                </td>
                <td>
                    Opacity: <input type={"number"} min={0} max={100} onChange={e => {
                        setImgOpacity(Number.parseInt(e.target.value));
                    }} value={imgOpacity} style={{width:"64px"}} />
                </td>
            </tr>
            <tr>
                <td>
                    Text Cols: <input type={"number"} min={1} max={1000} onChange={e => {
                        setTextCols(Number.parseInt(e.target.value));
                    }} value={textCols} style={{width:"64px"}} />
                </td>
                <td>Image Offset</td>
                <td>Textbox Offset</td>
                <td>
                    Brightness: <input type={"number"} min={0} max={1000} onChange={e => {
                        setImgBrightness(Number.parseInt(e.target.value));
                    }} value={imgBrightness} style={{width:"64px"}} />
                </td>
                <td>
                    Hue Rotate: <input type={"number"} min={0} max={360} onChange={e => {
                        setImgHueRotate(Number.parseInt(e.target.value));
                    }} value={imgHueRotate} style={{width:"64px"}} />
                </td>
                <td>
                    Saturate: <input type={"number"} min={0} max={1000} onChange={e => {
                        setImgSaturate(Number.parseInt(e.target.value));
                    }} value={imgSaturate} style={{width:"64px"}} />
                </td>
            </tr>
            <tr>
                <td>
                    Text Color: <input onChange={e => setTextColor(e.target.value)} style={{
                        width: "64px"
                    }} value={textColor} />
                </td>
                <td>
                    Left: <input type={"number"} min={-10000} max={+10000} onChange={e => {
                        setImgLeft(Number.parseInt(e.target.value));
                    }} value={imgLeft} style={{width:"64px"}} />
                </td>
                <td>
                    Left: <input type={"number"} min={-10000} max={+10000} onChange={e => {
                        setTextLeft(Number.parseInt(e.target.value));
                    }} value={textLeft} style={{width:"64px"}} />
                </td>
                <td>
                    Contrast: <input type={"number"} min={0} max={1000} onChange={e => {
                        setImgConstrast(Number.parseInt(e.target.value));
                    }} value={imgContrast} style={{width:"64px"}} />
                </td>
                <td>
                    Invert: <input type={"number"} min={0} max={100} onChange={e => {
                        setImgInvert(Number.parseInt(e.target.value));
                    }} value={imgInvert} style={{width:"64px"}} />
                </td>
                <td>
                    Sepia: <input type={"number"} min={0} max={100} onChange={e => {
                        setImgSepia(Number.parseInt(e.target.value));
                    }} value={imgSepia} style={{width:"64px"}} />
                </td>
            </tr>
            <tr>
                <td>
                    <button onClick={() => navigator.clipboard.writeText(text)}>Copy ASCII Art Text</button>
                </td>
                <td>
                    Top: <input type={"number"} min={-10000} max={+10000} onChange={e => {
                        setImgTop(Number.parseInt(e.target.value));
                    }} value={imgTop} style={{width:"64px"}} />
                </td>
                <td>
                    Top: <input type={"number"} min={-10000} max={+10000} onChange={e => {
                        setTextTop(Number.parseInt(e.target.value));
                    }} value={textTop} style={{width:"64px"}} />
                </td>
            </tr>
            </table>
        </div>
        <div style={{
            position: "absolute",
            top: "300px"
        }}> {/* editor area */}
            <h2>Editor</h2>
            <img src={imgUrl} alt={"Invalid URL"} style={{
                position: "absolute",
                top: (50+imgTop)+"px",
                left: imgLeft+"px",
                width: imgWidth+"px",
                display: hideImage ? "none" : undefined,
                filter: ("blur($Apx) brightness($B%) contrast($C%)"
                        +"grayscale($D%) hue-rotate($Edeg) invert($F%)"
                        +"opacity($G%) saturate($H%) sepia($I%)")
                        .replace("$A",imgBlur.toString())
                        .replace("$B",imgBrightness.toString())
                        .replace("$C",imgContrast.toString())
                        .replace("$D",imgGrayscale.toString())
                        .replace("$E",imgHueRotate.toString())
                        .replace("$F",imgInvert.toString())
                        .replace("$G",imgOpacity.toString())
                        .replace("$H",imgSaturate.toString())
                        .replace("$I",imgSepia.toString())
            }} />
            <textarea rows={textRows} cols={textCols}
                value={text} onChange={e => setText(e.target.value)}
                style={{
                    position: "absolute",
                    background: "rgba(0,0,0,0)",
                    resize: "none",
                    fontSize: "1em",
                    top: (50+textTop)+"px",
                    left: textLeft+"px",
                    border: "5px solid black",
                    color: textColor
            }}></textarea>
        </div>
        </>
    );
};

export default Editor;
