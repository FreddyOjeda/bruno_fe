import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductResponse } from 'src/app/models/ProductResponse';
import { ListProductsComponent } from '../list-products/list-products.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  _route:ActivatedRoute;
  productID:string | null="";
  list: ProductResponse[]=[
    {
      'id':1,
      'name':'Camiseta',
      'description':'camiseta multicolor cuello redondo',
      'image': 'https://scontent.fbog15-1.fna.fbcdn.net/v/t39.30808-6/286899287_5374935265900540_4245854539895144882_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeFvA9B5YWO8PpvyEuQKY1hQKz893M5U6CErPz3czlToIallWz9DaaxLLWnE9c8xgY45BapYc2u2SArMDPxiA7_u&_nc_ohc=aEbViKLGGmwAX8Lk0xJ&tn=16lFrtXQqTniuI-Q&_nc_ht=scontent.fbog15-1.fna&oh=00_AfC_GWq-qRdRZ2dmxlAk_ztvfSnX9Px90gQuf4Eomg88XQ&oe=63A93B23',
      'value':30000
    },
    {
      'id':2,
      'name':'Chaqueta',
      'description':'Chaquetas para toda la familia',
      'image': 'https://scontent.fbog15-1.fna.fbcdn.net/v/t39.30808-6/284156791_5337180756342658_8895678575674900102_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeHTn6X_cZRjUuDL26RZbHout-jbrWneDaq36Nutad4NqrPlLq_yMVwP-UAhEpR1rqCnsLmoL2VnysmokFngEaxl&_nc_ohc=0EXH5bjNDIkAX_8Z5hA&tn=16lFrtXQqTniuI-Q&_nc_ht=scontent.fbog15-1.fna&oh=00_AfA7IgFc8qvHMuKXIRogXROq_DhC7-dThoQ8jqJ8kG_C9g&oe=63A98AAF',
      'value':30000
    },
    {
      'id':3,
      'name':'Sueter',
      'description':'LLega a navidad con un sueter para cualquier ocasion',
      'image': 'https://scontent.fbog15-1.fna.fbcdn.net/v/t39.30808-6/293397172_5472191526174913_7922768243622896375_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeFb2KcTelVV0riQW53WKKkOwKcZ3z-Z6lnApxnfP5nqWbGSap-q2Pil1FnjMBDjDaPKJCLcu4_qyvD2OFIsaWqk&_nc_ohc=uu6KY4HRFL4AX9rqbB4&tn=16lFrtXQqTniuI-Q&_nc_ht=scontent.fbog15-1.fna&oh=00_AfDsxO226gqZtS6R2-d9xprxk5tBxko8jHaM2uQkq75IRg&oe=63AA37D3',
      'value':30000
    },
    {
      'id':4,
      'name':'Pantalon',
      'description':'Pantalones con mucho estilo para que deslumbres',
      'image': 'https://scontent.fbog15-1.fna.fbcdn.net/v/t39.30808-6/286600837_5391781324215934_8615939774930831762_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeGGuBxk2Jz1IIUk8jW9iXCMo7vQ702kIUiju9DvTaQhSCqrznIRiNoyLg3hmLE4k24uhd3l6Vah1jQUHy7lK_3z&_nc_ohc=N1na02eQckkAX9tM-NH&_nc_oc=AQmxcnjIHYjYNxdfjHutiEZ1XxspYE-YRubHkgrYJfu_dQMnVtnrqQyBO5CKfmMG1AY&_nc_ht=scontent.fbog15-1.fna&oh=00_AfB33f3X3Ky-9H_U8yqLrwQDQt-kBWHkCLfezPt6aEuBOQ&oe=63A958EF',
      'value':30000
    },
    {
      'id':5,
      'name':'Camiseta',
      'description':'camiseta multicolor cuello redondo',
      'image': 'https://scontent.fbog15-1.fna.fbcdn.net/v/t39.30808-6/283305837_5340053959388671_9120506921020752220_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeHxgwBrb2QbGDTje9pRLvzNuWS4M898xW-5ZLgzz3zFb0DbawRMDMrl7Op5_Dc_v9_5wed4gTNNeKnDyqEsIXIr&_nc_ohc=Unp5EpqDjQwAX-DWCgx&tn=16lFrtXQqTniuI-Q&_nc_ht=scontent.fbog15-1.fna&oh=00_AfDTRZAMFmQOyOJ8Kg_11-gWAppS0BsexJgu6e4qnZgA8g&oe=63A9548D',
      'value':30000
    },
    {
      'id':6,
      'name':'Chaqueta',
      'description':'Chaquetas para toda la familia',
      'image': 'https://scontent.fbog15-1.fna.fbcdn.net/v/t39.30808-6/280759187_5298387160222018_4159811299861233008_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeE6yYAVfva2LHVIvI0-W1PvNs9CW7XWhlo2z0JbtdaGWgMUO00UO_tJnBbui2Gz567-_hZCYTys2M5ft4gpfIVh&_nc_ohc=aBqxJcdqhZ0AX_X8Fih&_nc_oc=AQltWeOpCtBxc35ObEPmC_gWFtsuSSORRShX_eLBb_LB-IOh9z2XRYHez46hpFPmF6A&_nc_ht=scontent.fbog15-1.fna&oh=00_AfCkIgxAjlFsVtZ8zHWc8-sbCalsE5oIEmvpIPcJO6Xm6Q&oe=63AA3204',
      'value':30000
    },
    {
      'id':7,
      'name':'Sueter',
      'description':'LLega a navidad con un sueter para cualquier ocasion',
      'image': 'https://scontent.fbog15-1.fna.fbcdn.net/v/t39.30808-6/275606171_5130981020295967_4959703793040852994_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeH5_BXRzejeZMGuHe_XkUz2zJViY8Q7Q6XMlWJjxDtDpYHS4XiYy_gQVSZdUzhj-qv6xDNT6mtuOaiPaWq8RUY6&_nc_ohc=-r-GMtTraWQAX9d48Q6&_nc_ht=scontent.fbog15-1.fna&oh=00_AfAwxo-H1aGe65Bh_DG8BUazQFC6urwrWlF9u_4sEcJkww&oe=63A90C58',
      'value':30000
    },
    {
      'id':8,
      'name':'Pantalon',
      'description':'Pantalones con mucho estilo para que deslumbres',
      'image': 'https://scontent.fbog15-1.fna.fbcdn.net/v/t39.30808-6/254944270_4719311341462939_3650295875639789470_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeHzWT0wGCB8r2wiVNGqSVvGRQROz3xOFB9FBE7PfE4UH6_V7ARABUcAWbEujnzp4Y0f3KbpsbVmY4iOb7WOn1mz&_nc_ohc=2vDUgdU4g44AX-I13xw&_nc_ht=scontent.fbog15-1.fna&oh=00_AfDFOa0DrOHYOdLLv8YTxJbjhbWq3OYa62QyIUNpPFyOUw&oe=63A9E3EC',
      'value':30000
    },
    {
      'id':9,
      'name':'Camiseta',
      'description':'camiseta multicolor cuello redondo',
      'image': 'https://scontent.fbog15-1.fna.fbcdn.net/v/t39.30808-6/255565072_4719311344796272_776881655887919337_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeFgzpLKFrbwhk7BvCnJXzWLBoZybHmnjLkGhnJseaeMucCQ5msjZ61N8t7UVQq-UJbEzB3s3M4bzA4xLSPT_nHo&_nc_ohc=Op3XYnmY6UUAX881zq4&tn=16lFrtXQqTniuI-Q&_nc_ht=scontent.fbog15-1.fna&oh=00_AfDFWEeNm4OPrC4bwdf8GW1-DlyHxWLBch0kYKzFJoiWnA&oe=63A8D9FC',
      'value':30000
    },
    {
      'id':10,
      'name':'Chaqueta',
      'description':'Chaquetas para toda la familia',
      'image': 'https://scontent.fbog15-1.fna.fbcdn.net/v/t39.30808-6/254704111_4716965815030825_816676662269966092_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeE3oNH4F17bWA23o6APXISNmWXn_WoZHh2ZZef9ahkeHaIJnP34L_PwKj4prECpGkA9-Xg2VI4g1XsFT8phbsCu&_nc_ohc=ODlruVTD-38AX_wZRhR&tn=16lFrtXQqTniuI-Q&_nc_ht=scontent.fbog15-1.fna&oh=00_AfDcmTAqt8zWEtOJwqhn7eShR7ILmzLC-gxB4N7yO2qgYA&oe=63AA474B',
      'value':30000
    },
    {
      'id':11,
      'name':'Sueter',
      'description':'LLega a navidad con un sueter para cualquier ocasion',
      'image': 'https://scontent.fbog15-1.fna.fbcdn.net/v/t39.30808-6/292398408_5459009070826492_7199660234258934325_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEEw9yxSzS4-gyqhYS7OpOqLOp7raDSIWAs6nutoNIhYEfN3T-tcWgmu3MnPEViOai0KPvZ1gM4_5z10c8GMdSE&_nc_ohc=_WbtCHhwlCkAX_yDaz7&_nc_oc=AQl9eqa-gSvYVEOW9TPjioWtNcdIHXjCQ36Yity4I_On0zIneD7eV-bCQyYjZqwTvdU&_nc_ht=scontent.fbog15-1.fna&oh=00_AfADPkCIJucSh_wIZTg43YAIP7XYHuUQx-An5QxmmpMLHw&oe=63A93151',
      'value':30000
    },
    {
      'id':12,
      'name':'Pantalon',
      'description':'Pantalones con mucho estilo para que deslumbres',
      'image': 'https://scontent.fbog15-1.fna.fbcdn.net/v/t39.30808-6/306846796_5651655441561853_2452541030785652380_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEggzXZ9WWlVv7HdmReWWg2l_VpQqvPReyX9WlCq89F7OY-2-WOEBaT7a7z0cLnE4iAanBjIoZsuSyh-gK6zs_j&_nc_ohc=Udqt3Mni_6IAX_NfnPQ&tn=16lFrtXQqTniuI-Q&_nc_ht=scontent.fbog15-1.fna&oh=00_AfB92uKNU3wz1dw1-d1xB6Ow16P5_RGkGrL-JLzRYNWM4A&oe=63A8DFA9',
      'value':30000
    },
  ];
  product:ProductResponse;

  constructor(route:ActivatedRoute){
    this._route=route;
    this.product=new ProductResponse(0,'','','',0);
    if(this._route.snapshot.paramMap.get('id')!= null){
      this.productID=this._route.snapshot.paramMap.get('id');
    }
    const aux=this.list.find(p=>p.id==Number(this.productID))
    if(aux!=undefined){
      this.product=aux;
    }
  }

  
}
