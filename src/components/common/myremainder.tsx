
export default function MyRemainder() {
  return (
    <div id="remainder">
        {/* <header> */}
            <h2>My Remainders</h2>
        {/* </header> */}
        <main>
            <div className="info text-2xl">
                <h4 className="text-red-300">Cyber security session</h4>
                <small>Feb 6 9:00 am</small>
            </div>
            <div className="info">
                <h4>ML workshop</h4>
                <small>Feb 8 9:00 am</small>
            </div>
            <div className="info">
                <h4>Cyber security session</h4>
                <small>Feb 19 9:00 am</small>
            </div>
        </main>
    </div>
  );
}
