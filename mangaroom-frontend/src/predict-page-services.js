const AttentionZone = (show, x, y) => {
    if (!show) return null;

    return (
        <div
            className="absolute border-2 border-dashed border-emerald-500/50 bg-emerald-500/5 rounded-md pointer-events-none"
            style={{
                top: `${y}px`,
                left: `${x}px`,
                width: `100px`,
                height: `100px`
            }}
        >
            <span className="absolute -top-5 left-1 text-[10px] font-mono text-emerald-400 bg-black/80 px-1 rounded">
                Zone 1
            </span>
        </div>
    )
}


export function listenMousePointer(callback) {
    window.addEventListener('mousemove', callback);
    let x_coordinate = 0
    let y_coordinate = 0
    if (x_coordinate > 0 && y_coordinate > 0) {
        x_coordinate += callback.clientX
        y_coordinate += callback.clientY
        return AttentionZone(true, x_coordinate, y_coordinate)
    }
}
