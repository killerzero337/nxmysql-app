import Imagen from "@/components/Imagen";
import Button from "@/components/Button";

function Form2({ action, title, proveedor, disabled }) {
  return (
    <form id="preview">
      <Imagen img={proveedor?.imagen ?? "/imagen.png"} />

      <div class="datos">
        <input type="hidden" name="id" value={proveedor?.id} />
        <fieldset disabled={disabled}>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            required
            id="nombre"
            name="nombre"
            placeholder="Nombre"
            defaultValue={proveedor?.nombre}
            autoFocus
          />
          <label htmlFor="telefono">Telefono</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            placeholder="Telefono"
            defaultValue={proveedor?.telefono}
          />
        </fieldset>
        <Button action={action} title={title} />
      </div>
    </form>
  );
}

export default Form2;
