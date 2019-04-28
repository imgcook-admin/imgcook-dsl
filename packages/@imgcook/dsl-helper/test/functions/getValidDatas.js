/**
 * @author 卡狸
 * @version 1.0
 * @param
 * @return
 */
export default function(datas, max){
  const { hasLastLocation } = this.props && this.props.attrs;
  if (hasLastLocation === true || hasLastLocation === 'true') {
    if (datas.length === 1 && datas[0].tail === 'true') {
      datas[1] = { isLastLocation: true };
      return datas;
    } else if (datas.length >= max) {
      if (datas[1].tail === 'true') {
        datas[1].isLastLocation = true;
      }
      return datas.slice(0, max);
    } else {
      return null;
    }
  } else {
    return datas.length >= max ? datas.slice(0, max) : null;
  }
};