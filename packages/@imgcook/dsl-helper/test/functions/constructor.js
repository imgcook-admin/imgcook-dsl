/**
 * @author 卡狸
 * @version 1.0
 * @param
 * @return
 */
export default function(props){
  super(props);
  const { spmA, spmB, spmC } = props;
  this.spmFull = [spmA, spmB, spmC].join('.');
};