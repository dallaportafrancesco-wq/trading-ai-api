
from fastapi import FastAPI
import vectorbt as vbt

app = FastAPI()

@app.get("/")
def home():
    return {"msg": "Trading AI API online"}

@app.get("/signal/{symbol}")
def get_signal(symbol: str):
    data = vbt.YFData.download(symbol, period='90d').get('Close')
    ma_fast = vbt.MA.run(data, window=20)
    ma_slow = vbt.MA.run(data, window=50)
    buy = bool(ma_fast.ma_crossed_above(ma_slow).iloc[-1])
    return {"symbol": symbol, "buy_signal": buy}