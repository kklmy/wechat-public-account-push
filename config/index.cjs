/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxc87bb7e5ba8b6ee5',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'f755556f04cab7fdd61d0a1c0f6c9f32',

  PROVINCE: '上海',
  CITY: '闵行',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o1HoF5_0FTZ4jKLj9Iw0b_5i-6-Y',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Yg_a6C-AwhX8Woyh_DD-9ZT8aKAG_SEmxiG9UzbSxmg',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-23',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2003', date: '07-26',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: 'yhn', year: '2003', date: '08-23',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '11-04',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-11-29' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'gctQY7KgfDs8NLpkG_RxNgMIkgJYzG1ikWdb3OJoGw4',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o1HoF5-dvWAqwC7kX6NHeL_NiOd0',
    }
  ],

}

module.exports = USER_CONFIG

