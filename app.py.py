from fastapi import FastAPI
import vectorbt as vbt

app = FastAPI()

@app.get("/")
def home():
    return {"msg": "Trading AI API online"}

@app.get("/signal/{symbol}")
def get_signal(symbol: str):
    data = vbt.YFData.download(symbol, period='90d').get('Close')
    fast = vbt.MA.run(data, window=20)
    slow = vbt.MA.run(data, window=50)
    buy = bool(fast.ma_crossed_above(slow).iloc[-1])
    return {"symbol": symbol, "buy_signal": buy}