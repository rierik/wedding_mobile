import useFontStore from './store/useFontStore';

export default function FontChanger() {
  const fonts = ['Arial', 'Times New Roman', 'Verdana', 'Courier New'];
  const { selectedFont, setFont } = useFontStore();

  return (
    <div style={{ padding: '20px' }}>
      <select value={selectedFont} onChange={(e) => setFont(e.target.value)}>
        {fonts.map((font) => (
          <option key={font} value={font}>
            {font}
          </option>
        ))}
      </select>
      <p style={{ fontFamily: selectedFont }}>Text</p>
    </div>
  );
}
