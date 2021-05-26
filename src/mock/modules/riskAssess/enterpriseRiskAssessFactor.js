import Mock from 'mockjs'

// 生成数据列表
var dataList = []
for (let i = 0; i < Math.floor(Math.random() * 10 + 1); i++) {
  dataList.push(Mock.mock({
    'doId': '@increment',
    'riskUnit': '风险单元',
    'riskPoint': '@email',
    'riskLevel': 2,
    'riskFactor': " 危害因素",
    'checkNum': 2,
    'factorType': "类型",
    'riskType': "事故伤害类型",
    'riskResult': '风险地点及部位',
    'riskProbability': '发生的可能性',
    'riskSeverity': '事故后果',
    'riskDegree': '暴露的频繁程度'
  }))
}
export function list() {
  return {
    // isOpen: false,
    url: 'riskAssess/enterpriseRiskAssessFactor/list',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'page': {
        'totalCount': dataList.length,
        'pageSize': 10,
        'totalPage': 1,
        'currPage': 1,
        'list': dataList 
      }
    }
  }
}
var riskUnitList=[]
for (let i = 0; i < Math.floor(Math.random() * 10 + 1); i++) {
    riskUnitList.push(Mock.mock({
        id: '@increament',
        riskUnit: "风险单元"
    }))
}
// 获取风险评估要素列表
export function listRiskUnit () {
  return {
    // isOpen: false,
    url: '/riskAssess/enterpriseRiskAssessUnit/listRiskUnit',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'page': {
        'totalCount': dataList.length,
        'pageSize': 10,
        'totalPage': 1,
        'currPage': 1,
        'list': riskUnitList 
      }
    }
  }
}

//风险点列表
var riskPointList=[]
for (let i = 0; i < Math.floor(Math.random() * 10 + 1); i++) {
    riskPointList.push(Mock.mock({
        id: '@increament',
        riskPoint: "风险点"
    }))
}
// 获取风险评估要素列表
export function listRiskUnitByRiskUnit() {
  return {
    // isOpen: false,
    url: '/riskAssess/enterpriseRiskAssessUnit/listRiskUnitByRiskUnit',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'page': {
        'totalCount': dataList.length,
        'pageSize': 10,
        'totalPage': 1,
        'currPage': 1,
        'list': riskPointList
      }
    }
  }
}

// 获取用户信息
// export function info () {
//   return {
//     // isOpen: false,
//     url: '/sys/user/info',
//     type: 'get',
//     data: {
//       'msg': 'success',
//       'code': 0,
//       'user': dataList[0]
//     }
//   }
// }


// 添加用户
// export function add () {
//   return {
//     // isOpen: false,
//     url: '/sys/user/save',
//     type: 'post',
//     data: {
//       'msg': 'success',
//       'code': 0
//     }
//   }
// }

// 修改用户
// export function update () {
//   return {
//     // isOpen: false,
//     url: '/sys/user/update',
//     type: 'post',
//     data: {
//       'msg': 'success',
//       'code': 0
//     }
//   }
// }

// 删除用户
export function del () {
  return {
    // isOpen: false,
    url: '/riskAssess/enterpriseRiskAssessFactor/delete',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}