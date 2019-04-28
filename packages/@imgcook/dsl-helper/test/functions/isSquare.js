/**
 * @author 卡狸
 * @version 1.0
 * @param
 * @return
 */
export default function(){
  let attrs = this.props.attrs;
  return (attrs && attrs.picType === 'true') || attrs.picType === true;
};