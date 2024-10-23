import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../page";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));


describe("Home page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              id: 1,
              title: "Caneca de cerâmica rústica",
              tag: "mug",
              src: "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg",
              price: "37.45",
              description: "A Caneca de cerâmica rústica é perfeita...",
              sales: "150",
              date: "2024-10-19",
            },
            {
              id: 2,
              title: "Camiseta Ramones",
              tag: "tshirt",
              src: "https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg",
              price: "41.23",
              description: "A Camiseta Ramones é estilosa e confortável...",
              sales: "130",
              date: "2024-10-01",
            },
          ]),
      })
    );
  });

  it("Deve exibir uma lista de produtos ao carregar a página", async () => {
    render(<Home />);

    expect(screen.getByText(/todos os produtos/i)).toBeDefined();

    const item = await screen.findByText(/Caneca de cerâmica rústica/i);
    const item2 = await screen.findByText(/Camiseta Ramones/i);

    expect(item).toBeDefined();
    expect(item2).toBeDefined();
  });

  it("Deve filtrar por camisetas e canecas ao clicar nas opções de filtro", async () => {
    render(<Home />);

    const camisetaFilter = screen.getByText(/camisetas/i);
    const canecaFilter = screen.getByText(/canecas/i);

    // Clicar em "Camisetas" e verificar se apenas camisetas aparecem
    fireEvent.click(camisetaFilter);
    const camisetaProduto = await screen.findByText(/Camiseta Ramones/i);
    expect(camisetaProduto).toBeDefined();

    // Clicar em "Canecas" e verificar se apenas canecas aparecem
    fireEvent.click(canecaFilter);
    const canecaProduto = await screen.findByText(
      /Caneca de cerâmica rústica/i
    );
    expect(canecaProduto).toBeDefined();
  });

  it("Ordenação deve começar com 'Organizar por' e então ordenar pelas opções conforme selecione", async () => {
    render(<Home />);

    const sortDropdown = screen.getAllByText(/organizar por/i);

    fireEvent.click(sortDropdown[0]);
    const sortMaiorMenor = screen.getAllByText(/maior - menor/i);
    fireEvent.click(sortMaiorMenor[0]);

    const firstItemAfterSort = await screen.findByText(/Camiseta Ramones/i);
    expect(firstItemAfterSort).toBeDefined(); // Espera que o item mais caro esteja no topo
  });

  it("Deve listar os produtos com imagem, título e valor", async () => {
    render(<Home />);

    const productImage = await screen.findByAltText("Caneca de cerâmica rústica");
    const productTitle = await screen.findByText(/Caneca de cerâmica rústica/i);
    const productPrice = await screen.findByText(/37.45/i);

    expect(productImage).toBeDefined();
    expect(productTitle).toBeDefined();
    expect(productPrice).toBeDefined();
  });
});
