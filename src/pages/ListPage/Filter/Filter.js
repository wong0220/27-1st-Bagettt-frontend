import './Filter.scss';
import BrandSort from './BrandSort/BrandSort';

const SORT_LOWER = 'price';
const SORT_HIGHER = '-price';

function Filter({
  openProduct,
  checkSortPrice,
  isOpenSortMenu,
  sortPrice,
  sort,
  reset,
  openBrands,
  isOpenBrands,
  selectBrand,
  brandList,
}) {
  return (
    <div className="filterContainer">
      <h1 className="title">빵 구독</h1>
      <BrandSort
        openBrands={openBrands}
        isOpenBrands={isOpenBrands}
        selectBrand={selectBrand}
        brandList={brandList}
      />
      <div className="filter" onClick={openProduct}>
        상품정렬순
      </div>
      {isOpenSortMenu && (
        <div>
          <div className="lowerPriceWrapper">
            <label htmlFor={SORT_LOWER} className="sortPrice">
              <input
                checked={sortPrice === SORT_LOWER}
                type="radio"
                name={SORT_LOWER}
                id={SORT_LOWER}
                onChange={checkSortPrice}
              />
              낮은 가격 순
            </label>
          </div>
          <div className="higherPriceWrapper">
            <label htmlFor={SORT_HIGHER} className="sortPrice">
              <input
                checked={sortPrice === SORT_HIGHER}
                type="radio"
                name={SORT_HIGHER}
                id={SORT_HIGHER}
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
