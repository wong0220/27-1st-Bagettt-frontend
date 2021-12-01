import './Filter.scss';

function Filter({
  openProduct,
  checkHigherPrice,
  checkLowerPrice,
  sortProduction,
  lowerPrice,
  higherPrice,
  sort,
  reset,
}) {
  return (
    <div className="FilterContainer">
      <h1 className="title">빵 구독</h1>
      <div className="filter" onClick={openProduct}>
        상품정렬순
      </div>
      {sortProduction ? (
        <div>
          <div className="lowerPriceWrapper">
            <label htmlFor="lower" className="lowerPrice">
              <input
                checked={lowerPrice}
                type="radio"
                name="lower"
                id="lower"
                onChange={checkLowerPrice}
              />
              낮은 가격 순
            </label>
          </div>
          <div className="higherPriceWrapper">
            <label htmlFor="higher" className="higherPrice">
              <input
                checked={higherPrice}
                type="radio"
                name="higher"
                id="higher"
                onChange={checkHigherPrice}
              />
              높은 가격 순
            </label>
          </div>
        </div>
      ) : null}
      <div className="buttonWrapper">
        <button className="resetButton" onClick={reset}>
          초기화
        </button>
        <button className="filterButton" onClick={sort}>
          필터 적용
        </button>
      </div>
      <div className="anonymouse" />
    </div>
  );
}

export default Filter;
