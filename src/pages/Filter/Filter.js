import './Filter.scss';

function Filter({
  openProduct,
  checkSortPrice,
  isOpenSortMenu,
  sortPrice,
  sort,
  reset,
}) {
  return (
    <div className="filterContainer">
      <h1 className="title">빵 구독</h1>
      <div className="filter" onClick={openProduct}>
        상품정렬순
      </div>
      {isOpenSortMenu && (
        <div>
          <div className="lowerPriceWrapper">
            <label htmlFor="lower" className="higherPrice">
              <input
                checked={sortPrice === 'lower'}
                type="radio"
                name="lower"
                id="lower"
                onChange={checkSortPrice}
              />
              낮은 가격 순
            </label>
          </div>
          <div className="higherPriceWrapper">
            <label htmlFor="higher" className="higherPrice">
              <input
                checked={sortPrice === 'higher'}
                type="radio"
                name="higher"
                id="higher"
                onChange={checkSortPrice}
              />
              높은 가격 순
            </label>
          </div>
        </div>
      )}
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
