import {useEffect} from 'react';
import {useLazyGetProductsQuery} from "../../store/apiSlice/apiSlice";
import Form from 'react-bootstrap/Form';
import './index.css';
import {ContainerTypesProps} from "../../components/ContainerProduct/container.types";
import ContainerProduct from "../../components/ContainerProduct";
import {category} from "../../constans/constans";

const Products = () => {
  const [getProducts, {data}] = useLazyGetProductsQuery();

  useEffect(()=> {
    getProducts({params: ''})
  },[])

  const handleChangeType = (e: string) => {
    const params = e ? `?type=${e}` : '';
      getProducts({params});
  }

  return (
    <div className='wrap-products'>
      <div className='header'>
        <h3>Продукты / {data?.length ? data?.length : '0'}</h3>
        <span className='text'>Тип:</span>
        <Form.Select className='select' size="sm" onChange={(e)=>handleChangeType(e.target.value)}>
          {category.map((item)=><option key={item.value} value={item.value}>{item.label}</option>)}
        </Form.Select>
      </div>
      {data ? data.map((product: ContainerTypesProps) =>
          <ContainerProduct
            titleOrder={product?.titleOrder}
            title={product?.title}
            type={product?.type}
            key={product.id}
            id={product?.id}
            guarantee={product?.guarantee}
            price={product?.price}
          />)
        :
        ''
      }
    </div>
  );
};

export default Products;