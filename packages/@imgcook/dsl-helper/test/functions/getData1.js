/**
 * @author 卡狸
 * @version 1.0
 * @param value 入参
 * @return value 出参
 */
export default function(args1, args2 = 123, arg3 = {}) {
  // 数据源
  const attrs = {};
  const data = {};
  const pageInfo = {};
  // 数据源整合
  const { moduleDataSource } = this.props && this.props.data;
  const datas = this.getValidDatas(moduleDataSource, 2);
  if (datas === null) {
    attrs.isValid = false;
  } else {
    attrs.isValid = true;
  }
  const expInfoProps = getExpInfo({
    data: datas,
    spmFull: this.spmFull,
  });
  attrs.expInfoProps = expInfoProps;
  attrs.spmC = this.props.spmC;
  // getViews
  data.itemList = datas.map((data, index) => {
    const isSquare = this.isSquare();
    const itemPic = isSquare ? data.item_pic : data.item_long_pic;
    const picStyle = {
      height: isSquare ? 342 : 456
    };
    const wrapStyle = {
      height: isSquare ? 564 : 678
    };
    const favoriteStyle = !isSquare && { top: 424 };
    // 埋点信息
    const spmlinkProps = getSpmlinkProps({
      data,
      spmC: this.props.spmC,
      spmFull: this.spmFull,
      index
    });
    const { activityPic, hasLastLocation, pageStatus } = this.props.attrs;
    // 开启末坑位
    if (hasLastLocation === true || hasLastLocation === 'true') {
      // data.isLastLocation === true ， 则为末坑位
      if (data.isLastLocation === true) {
        const { lastPicUrl, lastPicHref } = this.props.attrs;
        return {
          index: index,
          notLastLocation: false,
          isLastLocation: true,
          lastPicHref,
          lastPicUrl,

          'data_spm_c': spmlinkProps[ 'data-spm-c' ],
          'data_spm_d': spmlinkProps[ 'data-spm-d' ],
          accessible: spmlinkProps.accessible,
          onPress: spmlinkProps.onPress, // TODO review下此种写法绑定出的是否有问题
          'data_ut': spmlinkProps['data-ut'],

          wrapStyle: wrapStyle,
        };
      }
    }
    return {
      ...data,
      notLastLocation: true,
      index: index,
      itemPic: itemPic,
      activityPic: activityPic,
      pageStatus: pageStatus,
      pageStatusCardText: pageStatus === 'pre' ? '加入购物车' : '立即抢购',
      showCountText: ((item) => {
        if (this.props.attrs.pageStatus === 'pre') {
          return item.item_favorite && item.item_favorite != '0'
            ? `想买人气${item.item_favorite}`
            : '火热加购中';
        } else {
          return item.item_trade_num && item.item_trade_num != '0'
            ? `已售${item.item_trade_num}件`
            : '火热加购中';
        }
      })(data),
      getLiveOrRedPacket: ((item = {}, spmlinkProps = {}) => {
        const { shop_live_status = '0', shop_hongbao_status = '0' } = item;
        let href = item.shop_hongbao_url,
          uri,
          picStyle = styles.picture5,
          picWrapStyle = styles.topLivePicWrap5;
        // 红包待发放
        if (shop_hongbao_status === '1') {
          uri = 'https://img.alicdn.com/tfs/TB1hDvCd5rpK1RjSZFhXXXSdXXa-194-46.png';
          // 红包发放中
        } else if (shop_hongbao_status === '2') {
          uri = 'https://img.alicdn.com/tfs/TB1XujUd4jaK1RjSZKzXXXVwXXa-194-46.png';
        } else if (shop_live_status === '1') {
          href = item.shop_live_url;
          uri = 'https://img.alicdn.com/tfs/TB1tnjzd6DpK1RjSZFrXXa78VXa-123-46.png';
          picStyle = styles.picture;
          picWrapStyle = styles.topLivePicWrap;
        }
        return {
          href,
          picStyle,
          uri,
        };
      })(data, spmlinkProps),
      getMaxLengthStr: ((str, max) => {
        return str && str.length !== 0 ? str.substring(0, max) : '';
      })(data.item_title, 12),
      getBottomLeftBtn: ((item) => {
        const { pageStatus } = this.props.attrs;
        if (
          pageStatus === 'pre' &&
          (item.has_hongbao === 'true' || item.has_hongbao === true)
        ) {
          return '进店抢红包';
        } else {
          return '进入店铺';
        }
      })(data), 

      'data_spm_c': spmlinkProps[ 'data-spm-c' ],
      'data_spm_d': spmlinkProps[ 'data-spm-d' ],
      accessible: spmlinkProps.accessible,
      onPress: spmlinkProps.onPress, // TODO review下此种写法绑定出的是否有问题
      'data_ut': spmlinkProps['data-ut'],

      wrapStyle: wrapStyle,
      picStyle: picStyle,
      favoriteStyle: favoriteStyle,
    };
    
  });

  // 数据源
  return {
    data: {a: '21311'},
    attrs: 12131,
    pageInfo,
  };
};