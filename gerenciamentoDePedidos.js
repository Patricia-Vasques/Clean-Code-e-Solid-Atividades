// Classe que representa um produto
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Classe que representa um item de pedido
class OrderItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  calculateSubtotal() {
    return this.product.price * this.quantity;
  }
}

// Interface para cálculo de valor total do pedido
class TotalCalculator {
  calculateTotal(items) {
    // Implementação específica para calcular o valor total
  }
}

// Classe concreta para cálculo de valor total do pedido
class SimpleTotalCalculator extends TotalCalculator {
  calculateTotal(items) {
    return items.reduce((total, item) => total + item.calculateSubtotal(), 0);
  }
}

// Classe que representa um pedido
class Order {
  constructor(customer, totalCalculator) {
    this.customer = customer;
    this.items = [];
    this.totalCalculator = totalCalculator;
  }

  addItem(orderItem) {
    this.items.push(orderItem);
  }

  calculateTotal() {
    return this.totalCalculator.calculateTotal(this.items);
  }
}

// Classe que representa um cliente
class Customer {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

// Interface para geração de notas fiscais
class InvoiceGenerator {
  generateInvoice(order) {
    // Implementação específica para gerar a nota fiscal
  }
}

// Classe concreta para geração de notas fiscais
class ConcreteInvoiceGenerator extends InvoiceGenerator {
  generateInvoice(order) {
    // Implementação específica para gerar a nota fiscal
  }
}

// Exemplo de uso
const product1 = new Product('Product 1', 10);
const orderItem1 = new OrderItem(product1, 2);

const product2 = new Product('Product 2', 20);
const orderItem2 = new OrderItem(product2, 3);

const customer = new Customer('John Doe', 'john@example.com');

const simpleTotalCalculator = new SimpleTotalCalculator();
const order = new Order(customer, simpleTotalCalculator);
order.addItem(orderItem1);
order.addItem(orderItem2);

console.log('Total order value:', order.calculateTotal());

const invoiceGenerator = new ConcreteInvoiceGenerator();
const invoice = invoiceGenerator.generateInvoice(order);
console.log('Invoice generated:', invoice);