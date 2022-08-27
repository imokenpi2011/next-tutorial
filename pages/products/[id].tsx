import { useRouter } from "next/router";

const Product = () => {
    // これでルーターが使用できる
    const router = useRouter();
    // 分割代入をしている。router.query.idでも可
    const { id } = router.query;

    return <div>Id:{id}</div>;
};

export default Product;
