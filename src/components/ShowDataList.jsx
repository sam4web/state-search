import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function ShowDataList({ dataList }) {
  const [showDataList, setShowDataList] = useState(false);
  return (
    <>
      <span className='show-data-list'>
        {dataList.length <= 1 ? (
          typeof dataList[0] === 'object' ? (
            <>
              {dataList[0].name} ({dataList[0].symbol})
            </>
          ) : (
            dataList[0]
          )
        ) : (
          <>
            <div className='data-list'>
              <button
                className='show-data-list__icon'
                onClick={() => {
                  setShowDataList((prevShowDataList) => !prevShowDataList);
                }}
              >
                {showDataList ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>

              <div
                className={`data-list__items ${
                  showDataList ? 'show-list' : ''
                }`}
              >
                {dataList.map((data, idx) => (
                  <span key={idx} className='data-item'>
                    {typeof data === 'object' ? (
                      <>
                        {data.name} ({data.symbol})
                      </>
                    ) : (
                      data
                    )}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </span>
    </>
  );
}
