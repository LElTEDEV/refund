import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

import searchSvg from "../assets/search.svg";
import { RefundItem, RefundItemProps } from "../components/RefundItem";
import { CATEGORIES } from "../utils/categories";
import { formatCurrency } from "../utils/formatCurrency";
import { Pagination } from "../components/Pagination";

const REFUND_EXAMPLE = {
  id: "123",
  name: "Igor",
  category: "Transporte",
  ammount: formatCurrency(34.5),
  categoryImg: CATEGORIES.Transport.icon,
};

export function Dashboard() {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [totalOfPage, setTotalOfPage] = useState(10);
  const [refunds, setRefunds] = useState<RefundItemProps[]>([REFUND_EXAMPLE]);

  function fetchRefund(e: React.FormEvent) {
    e.preventDefault();
  }

  function handlePagination(action: "next" | "previous") {
    setPage((prev) => {
      if (action === "next" && prev < totalOfPage) {
        return prev + 1;
      }

      if (action === "previous" && prev > 1) {
        return prev - 1;
      }

      return prev;
    });
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form
        onSubmit={fetchRefund}
        className="flex flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-3 mt-6"
      >
        <Input
          placeholder="Pesquisar pelo nome"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />

        <Button variant="icon" type="submit">
          <img src={searchSvg} alt="Ícone de pesquisar" className="w-5" />
        </Button>
      </form>

      <div className="my-6 flex flex-col gap-4 max-h-[342px] overflow-y-auto">
        {refunds.map((refund) => (
          <RefundItem data={refund} href={`/refund/${refund.id}`} />
        ))}
      </div>

      <Pagination
        current={page}
        total={totalOfPage}
        onNext={() => handlePagination("next")}
        onPrevious={() => handlePagination("previous")}
      />
    </div>
  );
}
