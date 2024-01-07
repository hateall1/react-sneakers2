function Card() {
    return (
<div className='card'>
            <img width={133} height={112} src="/img/sneakers/4.jpg" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-columm">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" />
              </button>
            </div>
          </div>);}
          export default Card;