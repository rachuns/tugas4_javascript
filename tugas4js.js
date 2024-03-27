let form = document.getElementById("pegawai");
let pilihJabatan = ["Manajer", "Asisten Manajer", "Staff"];
let pilihStatus = ["Menikah", "Belum"];

let pilih_Jabatan = `<option value=""> Pilihan Jabatan</option>`;
let pilih_Status = `<option value=""> Pilihan Status</option>`;

for (let J in pilihJabatan) {
  pilih_Jabatan += `<option value="${pilihJabatan[J]}">${pilihJabatan[J]}</option>`;
}

for (let S in pilihStatus) {
  pilih_Status += `<option value="${pilihStatus[S]}">${pilihStatus[S]}</option>`;
}

form.jabatan.innerHTML = pilih_Jabatan;
form.status.innerHTML = pilih_Status;

function DataPegawai() {
  let nama = form.nama.value;
  let jabatan = form.jabatan.value;
  let status = form.status.value;
  let gaji;

  if (jabatan == "Manajer") {
    gaji = 15000000;
  } else if (jabatan == "Asisten Manajer") {
    gaji = 10000000;
  } else if (jabatan == "Staff") {
    gaji = 5000000;
  } else {
    gaji = 0;
  }

  const tunjanganJabatan = 0.15 * gaji;
  const BPJS = 0.1 * gaji;

  var tunjanganKeluarga = status == "Menikah" ? 0.2 * gaji : 0;
  var totalGaji = gaji + tunjanganJabatan - BPJS + tunjanganKeluarga;

  const validator = (nama, jabatan, status) => {
    if (nama == "") {
      return "Nama wajib diisi!";
    } else if (jabatan == "") {
      return "Jabatan wajib dipilih!";
    } else if (status == "") {
      return "Status wajib dipilih!";
    } else {
      Swal.fire({
        title: "Informasi Pegawai",
        html: `
                <table
                class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
                >
                <thead
                    class="text-xs text-white uppercase bg-blue-600 dark:bg-gray-700 dark:text-gray-400"
                >
                    <tr>
                    <th scope="col" class="px-6 py-3">Nama Pegawai</th>
                    <th scope="col" class="px-6 py-3">Jabatan</th>
                    <th scope="col" class="px-6 py-3">Status</th>
                    <th scope="col" class="px-6 py-3">Gaji</th>
                    <th scope="col" class="px-6 py-3">Tunjangan Jabatan</th>
                    <th scope="col" class="px-6 py-3">BPJS</th>
                    <th scope="col" class="px-6 py-3">Tunjangan Keluarga</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    
                    <td class="px-6 py-4">${nama}</td>
                    <td class="px-6 py-4">${jabatan}</td>
                    <td class="px-6 py-4">${status}</td>
                    <td class="px-6 py-4">${gaji}</td>
                    <td class="px-6 py-4">${tunjanganJabatan}</td>
                    <td class="px-6 py-4">${BPJS}</td>
                    <td class="px-6 py-4">${tunjanganKeluarga}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr class="text-xs text-white uppercase bg-blue-600 dark:bg-gray-700 dark:text-gray-400">
                    <th colspan="7" style="text-align: center" class="px-6 py-4">Total Gaji</th>
                    
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td colspan="7" style="text-align: center" class="px-6 py-4">${totalGaji}</td>
    
                </tr>
                </tfoot>
                
                </table>
                `,
        showCloseButton: true,
      });
    }
  }
  document.getElementById("validator").innerHTML = validator(nama, jabatan, status);
}