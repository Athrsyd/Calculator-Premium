import { useNavigate } from 'react-router'
import { useRef } from 'react'
import LogicGrafik from './Logic/LogicGrafik.jsx';
import { TbMathFunction } from "react-icons/tb";
import { FiZoomIn, FiZoomOut, FiRefreshCw } from "react-icons/fi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const Graphic = () => {

  const {
    //states
    a,
    b,
    c,
    zoomLevel,
    graphData,
    analysis,
    rangeX,
    rangeY,

    // Functions
    handleChangeInput,
    handleZoomIn,
    handleZoomOut,
    handleResetZoom,
  } = LogicGrafik();
  const navigate = useNavigate();
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const handleTouchStart = (e) => {
    const t = e.touches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
  };

  const handleTouchEnd = (e) => {
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX.current;
    const dy = t.clientY - touchStartY.current;

    // swipe kiri -> balik ke kalkulator normal
    if (dx > 60 && Math.abs(dy) < 40) {
      navigate("/convert");
    }
  };

  const handletest = () => {
    console.log(analysis);
  }

  const gridStep = 3;
  const ygridStep = 10;

  const makeTicks = (min, max, step) => {
    if (!Number.isFinite(min) || !Number.isFinite(max) || !Number.isFinite(step) || step <= 0) return [];

    const start = Math.ceil(min / step) * step;
    const end = Math.floor(max / step) * step;
    const ticks = [];

    for (let v = start; v <= end + step / 10; v += step) {
      ticks.push(Number(v.toFixed(3)));
    }

    return ticks;
  };

  const xTicks = makeTicks(rangeX.min, rangeX.max, gridStep);
  const yTicks = makeTicks(rangeY.min, rangeY.max, ygridStep);

  const inputClass = `w-full rounded-2xl px-4 py-3 bg-primary text-text-dark dark:text-text
                      shadow-neu-pressed dark:shadow-neu-pressed text-center text-lg font-medium
                      outline-none transition-all duration-300
                      placeholder:text-text-muted`;

  const zoomBtnClass = `p-3 rounded-xl bg-primary text-text-dark dark:text-text
                        shadow-neu-btn dark:shadow-neu-btn
                        hover:scale-105 active:scale-95 transition-all duration-200
                        active:shadow-neu-btn-pressed dark:active:shadow-neu-btn-pressed`;

  return (
    <div className='min-h-[calc(100vh-76px)] w-full px-4 py-6 bg-primary transition-colors duration-300 animate-fadeIn'
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}>
      <div className="max-w-2xl mx-auto">

        {/* Header Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-violet-500/20 flex items-center justify-center
                          shadow-neu-btn dark:shadow-neu-btn">
            <TbMathFunction className="text-3xl text-violet-500" />
          </div>
        </div>

        {/* Title Card */}
        <div className="p-5 rounded-3xl bg-primary shadow-neu-flat dark:shadow-neu-flat mb-6">
          <h1 className='text-xl font-bold text-text-dark dark:text-text mb-2'>Kalkulator Fungsi Kuadrat</h1>
          <p className='text-sm text-text-muted'>
            Masukkan koefisien dengan rumus: <span className='font-semibold text-violet-500'>ax² + bx + c = 0</span>
          </p>
        </div>

        {/* Input Koefisien Card */}
        <div className="p-6 rounded-3xl bg-primary shadow-neu-flat dark:shadow-neu-flat mb-6">
          <label className="text-sm font-medium text-text-muted block mb-4">Koefisien (a ≠ 0)</label>
          <form className='grid grid-cols-3 gap-4'>
            <div className="space-y-2">
              <label className="text-xs font-medium text-violet-500 block text-center">a</label>
              <input className={inputClass} type="number" placeholder='a'
                onChange={(e) => { handleChangeInput('a', e.target.value) }}
                value={a} step='0.1' />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-violet-500 block text-center">b</label>
              <input className={inputClass} type="number" placeholder='b'
                onChange={(e) => { handleChangeInput('b', e.target.value) }}
                value={b} step='0.1' />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-violet-500 block text-center">c</label>
              <input className={inputClass} type="number" placeholder='c'
                onChange={(e) => { handleChangeInput('c', e.target.value) }}
                value={c} step='0.1' />
            </div>
          </form>
        </div>

        {/* Output Persamaan Card */}
        <div className="p-5 rounded-3xl bg-primary shadow-neu-pressed dark:shadow-neu-pressed mb-6">
          <label className="text-xs font-medium text-text-muted block mb-2">Persamaan yang dihasilkan</label>
          <p className='text-2xl font-bold text-text-dark dark:text-text'>
            {a === 1 ? <>x<sup>2</sup></> : <>{a}x<sup>2</sup></>}
            {b === 0 ? '' : b > 0 ? <> + {b}x</> : <> {b}x</>}
            {c === 0 ?  ''  :c<0 ? <>{c}</>: <> + {c}</>} = 0
          </p>
        </div>

        {/* Grafik Card */}
        <div className="p-6 rounded-3xl bg-primary shadow-neu-flat dark:shadow-neu-flat mb-6">
          {/* Zoom Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
            <div className="px-4 py-2 rounded-xl bg-violet-500/20 text-violet-500 font-semibold text-sm">
              Zoom: {zoomLevel.toFixed(2)}x
            </div>
            <button onClick={handleZoomIn} className={zoomBtnClass} title="Zoom In">
              <FiZoomIn className="text-xl text-violet-500" />
            </button>
            <button onClick={handleZoomOut} className={zoomBtnClass} title="Zoom Out">
              <FiZoomOut className="text-xl text-violet-500" />
            </button>
            <button onClick={handleResetZoom} className={zoomBtnClass} title="Reset Zoom">
              <FiRefreshCw className="text-xl text-violet-500" />
            </button>
          </div>

          {/* Grafik Area */}
          <div className="grafik-utama rounded-2xl overflow-hidden bg-white dark:bg-gray-800 p-2">
            {analysis && analysis.akarAkarPenyelesaian.deskriminan < 0 ? (
              <div className='flex flex-col justify-center items-center w-full h-64 text-center'>
                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                  <span className="text-3xl">⚠️</span>
                </div>
                <h2 className='text-lg font-bold text-red-500'>Grafik Invalid!</h2>
                <p className='text-sm text-text-muted mt-1'>Nilai diskriminan &lt; 0</p>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={graphData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                ratio={1 / 1}
              >
                <CartesianGrid stroke='#d15d15db' />
                <ReferenceLine x={0} stroke="#374151" strokeWidth={2} />
                <ReferenceLine y={0} stroke="#374151" strokeWidth={2} />
                <XAxis
                  type="number"
                  dataKey="x"
                  domain={[rangeX.min, rangeX.max]}
                  ticks={xTicks}
                  interval={0}
                  tickLine={true}
                  axisLine={false}
                  tick={{ fontSize: 12 }}
                  label={{
                    value: "x",
                    position: "insideBottomRight",
                    offset: -10,
                    style: { fontSize: 14, fontWeight: "bold" },
                  }} />
                <YAxis
                  type="number"
                  dataKey="y"
                  domain={[rangeY.min, rangeY.max]}
                  ticks={yTicks}
                  interval={0}
                  tickLine={true}
                  axisLine={false}
                  tick={{ fontSize: 12 }}
                  label={{
                    value: "y",
                    position: -90,
                    offset: 10,
                    style: { fontSize: 14, fontWeight: "bold" },
                  }}
                />
                <Tooltip
                  formatter={(value) => value.toFixed(2)}
                  labelFormatter={(label) => `x: ${label}`}
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid #ccc",
                  }} />
                <Line
                  type="monotone"
                  dataKey="y"
                  stroke="#4f46e5"
                  strokeWidth={3}
                  dot={false}
                  isAnimationActive={false}
                />
                {analysis && analysis.titikPuncak && (
                  <>
                    <ReferenceLine
                      x={analysis.titikPuncak.x}
                      stroke="#10b981"
                      strokeDasharray="5 5"
                      label={{ value: 'Sumbu Simetri', position: 'top', fill: '#10b981', fontSize: '12px' }}

                    />
                    <ReferenceDot
                      x={analysis.titikPuncak.x}
                      y={analysis.titikPuncak.y}
                      r={6}
                      fill="#ef4444"
                      stroke="#fff"
                      strokeWidth={2}
                    />
                  </>
                )}
                {analysis &&
                  analysis.akarAkarPenyelesaian &&
                  analysis.akarAkarPenyelesaian.tipe !== "none" &&
                  analysis.akarAkarPenyelesaian.akarAkar.map((root, i) => (
                    <ReferenceDot
                      key={i}
                      x={root}
                      y={0}
                      r={6}
                      fill="#10b981"
                      stroke="#fff"
                      strokeWidth={2}
                    />
                  ))}
                <Line
                  type="monotone"
                  dataKey="y"
                  stroke="#4f46e5"
                  strokeWidth={3}
                  dot={false}
                  isAnimationActive={false}
                />
                <ReferenceDot
                  x={0}
                  y={c}
                  r={6}
                  fill="#f59e0b"
                  stroke="#fff"
                  strokeWidth={2}
                />
              </LineChart>

            </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Keterangan / Analisis Card */}
        <div className="p-6 rounded-3xl bg-primary shadow-neu-flat dark:shadow-neu-flat">
          <h2 className='text-lg font-bold text-text-dark dark:text-text mb-4'>📊 Analisis Grafik</h2>
          <div onClick={handletest} className="space-y-3">
            {!analysis ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-pulse text-text-muted">Loading...</div>
              </div>
            ) : (
              <div className="grid gap-3">
                {/* Diskriminan */}
                <div className="p-4 rounded-2xl bg-primary shadow-neu-pressed dark:shadow-neu-pressed">
                  <label className="text-xs font-medium text-text-muted block mb-1">Nilai Diskriminan (D)</label>
                  <p className="text-lg font-bold text-violet-500">{analysis.akarAkarPenyelesaian.deskriminan}</p>
                </div>

                {/* Bentuk Grafik */}
                <div className="p-4 rounded-2xl bg-primary shadow-neu-pressed dark:shadow-neu-pressed">
                  <label className="text-xs font-medium text-text-muted block mb-1">Bentuk Grafik</label>
                  <p className="text-lg font-bold text-text-dark dark:text-text capitalize">{analysis.arahParabola}</p>
                </div>

                {/* Titik Puncak */}
                <div className="p-4 rounded-2xl bg-primary shadow-neu-pressed dark:shadow-neu-pressed">
                  <label className="text-xs font-medium text-text-muted block mb-1">
                    Titik Balik ({analysis.arahParabola === "membuka keatas" ? "Minimum" : "Maximum"})
                  </label>
                  <p className="text-lg font-bold text-emerald-500">
                    ({analysis.titikPuncak.x}, {analysis.titikPuncak.y})
                  </p>
                </div>

                {/* Akar-akar Penyelesaian */}
                <div className="p-4 rounded-2xl bg-primary shadow-neu-pressed dark:shadow-neu-pressed">
                  <label className="text-xs font-medium text-text-muted block mb-1">Akar-akar Penyelesaian</label>
                  {analysis.akarAkarPenyelesaian.tipe === "dua" && (
                    <p className="text-lg font-bold text-blue-500">
                      x<sub>1</sub> = {analysis.akarAkarPenyelesaian.akarAkar[0]} ; x<sub>2</sub> = {analysis.akarAkarPenyelesaian.akarAkar[1]}
                    </p>
                  )}
                  {analysis.akarAkarPenyelesaian.tipe === "satu" && (
                    <p className="text-lg font-bold text-blue-500">
                      x<sub>1,2</sub> = {analysis.akarAkarPenyelesaian.akarAkar[0]}
                    </p>
                  )}
                  {analysis.akarAkarPenyelesaian.tipe === "none" && (
                    <p className="text-lg font-bold text-red-500">
                      Tidak ada (D &lt; 0)
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Graphic