from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.fields.related import ForeignKey
from django.utils.translation import gettext as _ # aliasing gettext as _
from .managers import CustomUserManager
import datetime


# Create your models here.
class MonthlyRecord(models.Model):
    description = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class NICUPaedsMonthlyRecord(models.Model):
    month = models.CharField(max_length=100,blank=False,auto_created=True)
    year = models.PositiveSmallIntegerField(blank=False)
    Beds_available = models.PositiveSmallIntegerField(blank=False,default=0)
    Bed_days = models.PositiveSmallIntegerField(blank=False,default=0)
    Patient_days = models.PositiveSmallIntegerField(blank=False,default=0)
    Hospitalized = models.PositiveSmallIntegerField(blank=False,default=0)
    Discharged_alive = models.PositiveSmallIntegerField(blank=False,default=0)
    Died_before_48h = models.PositiveSmallIntegerField(blank=False,default=0)
    Died_after_48h = models.PositiveSmallIntegerField(blank=False,default=0)
    Days_hospitalised = models.PositiveSmallIntegerField(blank=False,default=0)
    Referrals = models.PositiveSmallIntegerField(blank=False,default=0)
    Transfers = models.PositiveSmallIntegerField(blank=False,default=0)
    Self_discharged = models.PositiveSmallIntegerField(blank=False,default=0)
    Stayed_ward = models.PositiveSmallIntegerField(blank=False,default=0)
    Admissions = models.PositiveSmallIntegerField(blank=False,default=0)

class RehabMonthlyRecord(models.Model):
    month_name = models.CharField(max_length=15)
    beds_available = models.PositiveSmallIntegerField()
    bed_days = models.PositiveSmallIntegerField()
    patient_days = models.PositiveSmallIntegerField()
    hospitalized = models.PositiveSmallIntegerField()
    discharged_alive = models.PositiveSmallIntegerField()
    died_before_48_h = models.PositiveSmallIntegerField()
    died_after_48_h = models.PositiveSmallIntegerField()
    days_hospitalized = models.PositiveSmallIntegerField()
    referrals = models.PositiveSmallIntegerField()
    transfers = models.PositiveSmallIntegerField()
    self_discharged = models.PositiveSmallIntegerField()
    stayed_in_the_ward = models.PositiveSmallIntegerField()
    admissions = models.PositiveSmallIntegerField()

    def __str__(self):
        return 'Rehab Record'

class MaternityMonthlyRecord(models.Model):
    month_name = models.CharField(max_length=15)
    beds_available = models.PositiveSmallIntegerField()
    bed_days = models.PositiveSmallIntegerField()
    patient_days = models.PositiveSmallIntegerField()
    hospitalized = models.PositiveSmallIntegerField()
    discharged_alive = models.PositiveSmallIntegerField()
    died_before_48_h = models.PositiveSmallIntegerField()
    died_after_48_h = models.PositiveSmallIntegerField()
    days_hospitalized = models.PositiveSmallIntegerField()
    referrals = models.PositiveSmallIntegerField()
    transfers = models.PositiveSmallIntegerField()
    self_discharged = models.PositiveSmallIntegerField()
    stayed_in_the_ward = models.PositiveSmallIntegerField()
    admissions = models.PositiveSmallIntegerField()

    #BIRTHS SECTION
    birth_weight_less_one_normal = models.PositiveSmallIntegerField()
    birth_weight_less_one_cesarean = models.PositiveSmallIntegerField()
    birth_weight_less_one_instrumentals = models.PositiveSmallIntegerField()
    birth_weight_between_one_and_two_normal = models.PositiveSmallIntegerField()
    birth_weight_between_one_and_two_cesarean = models.PositiveSmallIntegerField()
    birth_weight_between_one_and_two_instrumentals = models.PositiveSmallIntegerField()
    birth_weight_more_than_two_normal = models.PositiveSmallIntegerField()
    birth_weight_more_than_two_cesarean = models.PositiveSmallIntegerField()
    birth_weight_more_than_two_instrumentals = models.PositiveSmallIntegerField()
    birth_weight_not_weighed_normal = models.PositiveSmallIntegerField()
    birth_weight_not_weighed_cesarean = models.PositiveSmallIntegerField()
    birth_weight_not_weighed_instrumentals = models.PositiveSmallIntegerField()
    birth_immedietly_breatfed_normal = models.PositiveSmallIntegerField()
    birth_immedietly_breatfed_cesarean = models.PositiveSmallIntegerField()
    birth_immedietly_breatfed_instrumentals = models.PositiveSmallIntegerField()
    birth_skin_to_skin_thearpy_normal = models.PositiveSmallIntegerField()
    birth_skin_to_skin_thearpy_cesarean = models.PositiveSmallIntegerField()
    birth_skin_to_skin_thearpy_instrumental = models.PositiveSmallIntegerField()
    
    #POST NATAL SECTION
    postnatal_breastfeed_women_receive_vitamin_A = models.PositiveSmallIntegerField()
    postnatal_breastfeed_women_with_muac_less_210 = models.PositiveSmallIntegerField()
    posnatal_breastfeed_women_with_malnutrition_support= models.PositiveSmallIntegerField()
    postnatal_domestic_visit_zero_to_three = models.PositiveSmallIntegerField()
    postnatal_post_natal_consultations_zero_to_six_hours = models.PositiveSmallIntegerField()
    postnatal_post_natal_consultations_seven_to_six_hours = models.PositiveSmallIntegerField()
    postnatal_post_natal_consultations_seven_to_forty_two_hours = models.PositiveSmallIntegerField()
    
    #COMPLICATIONS SECTIONS
    num_of_obstetric_complications_recorded = models.PositiveSmallIntegerField()
    num_of_obstetric_complications_referred = models.PositiveSmallIntegerField()
    
    #STILLBORNS
    stilborn_macerated = models.PositiveSmallIntegerField()
    stillborn_not_macerated = models.PositiveSmallIntegerField()
    
    maternal_death_num_in_hospital = models.PositiveSmallIntegerField()
    maternal_death_num_in_community = models.PositiveSmallIntegerField()
    
    #SUPPORT FOR WIFE AND MOTHER
    support_zero_to_three_first_visit = models.PositiveSmallIntegerField()
    support_zero_to_three_second_visit = models.PositiveSmallIntegerField()
    support_zero_to_three_third_visit = models.PositiveSmallIntegerField()
    support_zero_to_three_fifth_plus_visit = models.PositiveSmallIntegerField()
    support_zero_to_three_total_visit = models.PositiveSmallIntegerField()
    support_four_to_six_first_visit = models.PositiveSmallIntegerField()
    support_four_to_six_second_visit = models.PositiveSmallIntegerField()
    support_four_to_six_third_visit = models.PositiveSmallIntegerField()
    support_four_to_six_forth_visit = models.PositiveSmallIntegerField()
    support_four_to_six_fifth_plus_visit = models.PositiveSmallIntegerField()
    support_four_to_six_total_visit = models.PositiveSmallIntegerField()
    support_seven_to_nine_first_visit = models.PositiveSmallIntegerField()
    support_seven_to_nine_second_visit = models.PositiveSmallIntegerField()
    support_seven_to_nine_third_visit = models.PositiveSmallIntegerField()
    support_seven_to_nine_forth_visit = models.PositiveSmallIntegerField()
    support_seven_to_nine_fifth_plus_visit = models.PositiveSmallIntegerField()
    support_seven_to_nine_total_visit = models.PositiveSmallIntegerField()
    support_total_visits_first_visit = models.PositiveSmallIntegerField()
    support_total_visits_second_visit = models.PositiveSmallIntegerField()
    support_total_visits_third_visit = models.PositiveSmallIntegerField()
    support_total_visits_forth_visit = models.PositiveSmallIntegerField()
    support_total_visits_fifth_plus_visit = models.PositiveSmallIntegerField()
    support_total_visits_total_visit = models.PositiveSmallIntegerField()
    
    #SUPPORT FOR WOMEN HOSPITAL SECTION
    num_pregnancies_at_risk = models.PositiveSmallIntegerField()
    anemia_in_pregnant_women = models.PositiveSmallIntegerField()
    pregnant_women_receiving_iron_folate = models.PositiveSmallIntegerField()
    pregnant_women_treated_for_iron_deficiency_anemia = models.PositiveSmallIntegerField()
    pregnant_women_with_birth_plan = models.PositiveSmallIntegerField()
    pregnant_women_with_malaria_treated = models.PositiveSmallIntegerField()
    pregnant_women_received_impregnated_mosquito_net = models.PositiveSmallIntegerField()
    pregnant_women_muac_less_than_210 = models.PositiveSmallIntegerField()
    pregnant_women_mam_or_mas_supported = models.PositiveSmallIntegerField()

    #OTHER SERVICES SECTION
    folate = models.PositiveSmallIntegerField()
    women_receiving_acetic_acid_inspection = models.PositiveSmallIntegerField()
    women_positive_smear_test_taken_care_of = models.PositiveSmallIntegerField()
    women_receiving_post_abortion_care = models.PositiveSmallIntegerField()
    
    #DELIVERIES SECTION
    deliveries_less_than_15_normal = models.PositiveSmallIntegerField()
    deliveries_less_than_15_cesarean = models.PositiveSmallIntegerField()
    deliveries_less_than_15_instrumentals = models.PositiveSmallIntegerField()
    deliveries_15_to_19_normal = models.PositiveSmallIntegerField()
    deliveries_15_to_19_cesearean = models.PositiveSmallIntegerField()
    deliveries_15_to_19_instrumentals = models.PositiveSmallIntegerField()
    deliveries_20_to_24_normal = models.PositiveSmallIntegerField()
    deliveries_20_to_24_cesarean = models.PositiveSmallIntegerField()
    deliveries_20_to_24_instrumentals = models.PositiveSmallIntegerField()
    deliveries_25_to_29_normal = models.PositiveSmallIntegerField()
    deliveries_25_to_29_cesarean = models.PositiveSmallIntegerField()
    deliveries_25_to_29_instrumentals = models.PositiveSmallIntegerField()
    deliveries_30_and_more_normal = models.PositiveSmallIntegerField()
    deliveries_30_and_more_cesarean = models.PositiveSmallIntegerField()
    deliveries_30_and_more_instrumentals = models.PositiveSmallIntegerField()
    deliveries_unknown_normal = models.PositiveSmallIntegerField()
    deliveries_unknown_cesarean = models.PositiveSmallIntegerField()
    deliveries_unknown_instrumentals = models.PositiveSmallIntegerField()
    
    #LABOR MANAGEMENT SECTION
    labor_use_partograph_normal = models.PositiveSmallIntegerField(default = 0)
    labor_use_partograph_cesarean = models.PositiveSmallIntegerField()
    labor_active_management_of_third_phase_labours = models.PositiveSmallIntegerField()

class PatientCaseStudyRecord(models.Model):

    #PATIENT STORY
    patient_name = models.CharField(max_length=20)
    patient_age = models.PositiveSmallIntegerField()
    patient_story = models.TextField(max_length=None)

class StaffRecognitionCaseStudyRecord(models.Model):
    
    #STAFF RECOGNITION
    staff_name = models.CharField(max_length=20)
    job_title = models.CharField(max_length=20)
    staff_recognition_Story = models.TextField(max_length=None)

class CommunityHealthMonthlyRecord(models.Model):
    month_name = models.CharField(max_length=15)

    #DELIVERIES
    mother_age_less_than_15_matrones = models.PositiveSmallIntegerField(default=0)
    mother_age_between_15to19_matrones = models.PositiveSmallIntegerField(default=0)
    mother_age_between_20to24_matrones = models.PositiveSmallIntegerField(default=0)
    mother_age_between_25o29_matrones = models.PositiveSmallIntegerField(default=0)
    mother_age_above_30_matrones = models.PositiveSmallIntegerField(default=0)
    mother_age_unknown_matrones = models.PositiveSmallIntegerField(default=0)
    mother_age_less_than_15_autres = models.PositiveSmallIntegerField(default=0)
    mother_age_between_15to19_autres = models.PositiveSmallIntegerField(default=0)
    mother_age_between_20to24_autres = models.PositiveSmallIntegerField(default=0)
    mother_age_between_25o29_autres = models.PositiveSmallIntegerField(default=0)
    mother_age_above_30_autres = models.PositiveSmallIntegerField(default=0)
    mother_age_unknown_autres = models.PositiveSmallIntegerField(default=0)

    #BIRTHS
    birth_weight_less_than_one_and_half_matrones = models.PositiveSmallIntegerField(default=0)
    birth_weight_between_one_and_half_and_two_and_half_matrones = models.PositiveSmallIntegerField(default=0)
    birth_weight_two_and_half_or_more_matrones = models.PositiveSmallIntegerField(default=0)
    birth_weight_not_weighed_matrones = models.PositiveSmallIntegerField(default=0)
    birth_immediately_breastfed_matrones = models.PositiveSmallIntegerField(default=0)
    birth_skin_to_skin_therapy_matrones = models.PositiveSmallIntegerField(default=0)
    birth_weight_less_than_one_and_half_autres = models.PositiveSmallIntegerField(default=0)
    birth_weight_between_one_and_half_and_two_and_half_autres = models.PositiveSmallIntegerField(default=0)
    birth_weight_two_and_half_or_more_autres = models.PositiveSmallIntegerField(default=0)
    birth_weight_not_weighed_autres = models.PositiveSmallIntegerField(default=0)
    birth_immediately_breastfed_autres = models.PositiveSmallIntegerField(default=0)
    birth_skin_to_skin_therapy_autres = models.PositiveSmallIntegerField(default=0)

    #POST NATAL
    postnatal_breastfeed_women_receive_vitamin_A_matrones = models.PositiveSmallIntegerField(default=0)
    postnatal_breastfeed_women_with_muac_less_than_210mm_matrones = models.PositiveSmallIntegerField(default=0)
    posnatal_breastfeed_women_with_malnutrition_support_matrones = models.PositiveSmallIntegerField(default=0)
    postnatal_domestic_visit_in_zero_to_three_days_matrones = models.PositiveSmallIntegerField(default=0)
    postnatal_breastfeed_women_receive_vitamin_A_autres = models.PositiveSmallIntegerField(default=0)
    postnatal_breastfeed_women_with_muac_less_than_210mm_autres = models.PositiveSmallIntegerField(default=0)
    posnatal_breastfeed_women_with_malnutrition_support_autres = models.PositiveSmallIntegerField(default=0)
    postnatal_domestic_visit_in_zero_to_three_days_autres = models.PositiveSmallIntegerField(default=0)

    #BIRTH CONTROL
    #Women/Femmes
    #ACCEPTANTS
    femmes_birth_control_OCP_acceptants_25_ans_or_more = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_OCP_acceptants_less_than_25_ans = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_patch_acceptants_less_than_25_ans = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_patch_acceptants_25_ans_or_more = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_depo_injection_acceptants_less_than_25_ans = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_depo_injection_acceptants_25_ans_or_more = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_implant_acceptants_less_than_25_ans = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_implant_acceptants_25_ans_or_more = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_inter_uterine_devices_acceptants_less_than_25_ans = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_inter_uterine_devices_acceptants_25_ans_or_more = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_vaginal_ring_acceptants_less_than_25_ans = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_vaginal_ring_acceptants_25_ans_or_more = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_breast_feeding_acceptants_less_than_25_ans = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_breast_feeding_acceptants_25_ans_or_more = models.PositiveSmallIntegerField(default=0)
    #TOTAL UTILISATEURS
    femmes_birth_control_total_OCP_utilisateurs_less_than_25_ans = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_total_OCP_utilisateurs_25_ans_or_more = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_total_patch_utilisateurs_less_than_25_ans = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_total_patch_utilisateurs_25_ans_or_more = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_tota_depo_injectionl_utilisateurs_less_than_25_ans = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_total_depo_injection_utilisateurs_25_ans_or_more = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_total_implant_utilisateurs_less_than_25_ans = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_total_implant_utilisateurs_25_ans_or_more = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_total_inter_uterine_devices_utilisateurs_less_than_25_ans = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_total_inter_uterine_devices_utilisateurs_25_ans_or_more = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_total_vaginal_ring_utilisateurs_less_than_25_ans = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_total_vaginal_ring_utilisateurs_25_ans_or_more = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_total_breast_feeding_utilisateurs_less_than_25_ans = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_total_breast_feeding_utilisateurs_25_ans_or_more = models.PositiveSmallIntegerField(default=0)
    #CONTRACEPTIFS DISTRIBUES
    femmes_birth_control_OCP_contraceptifs_cycle_quantity = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_OCP_contraceptifs_cycle_mois = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_patch_contraceptifs_cycle_quantity = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_patch_contraceptifs_cycle_mois = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_depo_injection_contraceptifs_vial_quantity = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_depo_injection_contraceptifs_vial_mois = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_implant_contraceptifs_paquet_quantity = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_implant_contraceptifs_paquet_mois = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_iter_uterine_devices_contraceptifs_piece_quantity = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_iter_uterine_devices_contraceptifs_piece_mois = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_vaginal_ring_contraceptifs_piece_quantity = models.PositiveSmallIntegerField(default=0)
    femmes_birth_control_vaginal_ring_contraceptifs_piece_mois = models.PositiveSmallIntegerField(default=0)

    #Men/Hommes
    men_birth_control_female_condom_acceptants_less_than_25_ans= models.PositiveSmallIntegerField(default=0)
    men_birth_control_female_condom_total_utilisateurs_less_than_25_ans= models.PositiveSmallIntegerField(default=0)
    men_birth_control_female_condom_acceptants_25_ans_or_more= models.PositiveSmallIntegerField(default=0)
    men_birth_control_female_condom_total_utilisateurs_25_ans_or_more= models.PositiveSmallIntegerField(default=0)
    men_birth_control_female_condom_contaceptifs_piece_quantity= models.PositiveSmallIntegerField(default=0)
    men_birth_control_female_condom_contaceptifs_piece_mois= models.PositiveSmallIntegerField(default=0)

    men_birth_control_sterlisation_acceptants_less_than_25_ans= models.PositiveSmallIntegerField(default=0)
    men_birth_control_sterlisation_total_utilisateurs_less_than_25_ans= models.PositiveSmallIntegerField(default=0)
    men_birth_control_sterlisation_acceptants_25_ans_or_more= models.PositiveSmallIntegerField(default=0)
    men_birth_control_sterlisation_total_utilisateurs_25_ans_or_more= models.PositiveSmallIntegerField(default=0)
    men_birth_control_male_condom_acceptants_less_than_25_ans= models.PositiveSmallIntegerField(default=0)
    men_birth_control_male_condom_total_utilisateurs_less_than_25_ans= models.PositiveSmallIntegerField(default=0)
    men_birth_control_male_condom_acceptants_25_ans_or_more= models.PositiveSmallIntegerField(default=0)
    men_birth_control_male_condom_total_utilisateurs_25_ans_or_more= models.PositiveSmallIntegerField(default=0)
    men_birth_control_vasectomy_acceptants_less_than_25_ans= models.PositiveSmallIntegerField(default=0)
    men_birth_control_vasectomy_total_utilisateurs_less_than_25_ans= models.PositiveSmallIntegerField(default=0)
    men_birth_control_vasectomy_acceptants_25_ans_or_more= models.PositiveSmallIntegerField(default=0)
    men_birth_control_vasectomy_total_utilisateurs_25_ans_or_more= models.PositiveSmallIntegerField(default=0)
    men_birth_control_CCV_sterlisation= models.PositiveSmallIntegerField(default=0)
    men_birth_control_CCV_vasectomy= models.PositiveSmallIntegerField(default=0)

    #VACCINES AND CONSUMABLES
    #vaccines
    vaccine_type_BCG_quantity_available_for_month= models.PositiveSmallIntegerField(default=0)
    vaccine_type_BCG_balance_at_month_end= models.PositiveSmallIntegerField(default=0)
    vaccine_type_BCG_number_of_days_out_of_stock= models.PositiveSmallIntegerField(default=0)
    vaccine_type_VPO_quantity_available_for_month= models.PositiveSmallIntegerField(default=0)
    vaccine_type_VPO_balance_at_month_end= models.PositiveSmallIntegerField(default=0)
    vaccine_type_VPO_number_of_days_out_of_stock= models.PositiveSmallIntegerField(default=0)
    vaccine_type_Penta_quantity_available_for_month= models.PositiveSmallIntegerField(default=0)
    vaccine_type_Penta_balance_at_month_end= models.PositiveSmallIntegerField(default=0)
    vaccine_type_Penta_number_of_days_out_of_stock= models.PositiveSmallIntegerField(default=0)
    vaccine_type_Rota_quantity_available_for_month= models.PositiveSmallIntegerField(default=0)
    vaccine_type_Rota_balance_at_month_end= models.PositiveSmallIntegerField(default=0)
    vaccine_type_Rota_number_of_days_out_of_stock= models.PositiveSmallIntegerField(default=0)
    vaccine_type_RR_quantity_available_for_month= models.PositiveSmallIntegerField(default=0)
    vaccine_type_RR_balance_at_month_end= models.PositiveSmallIntegerField(default=0)
    vaccine_type_RR_number_of_days_out_of_stock= models.PositiveSmallIntegerField(default=0)
    vaccine_type_dT_quantity_available_iformonth= models.PositiveSmallIntegerField(default=0)
    vaccine_type_dT_balance_at_month_end= models.PositiveSmallIntegerField(default=0)
    vaccine_type_dT_number_of_days_out_of_stock= models.PositiveSmallIntegerField(default=0)
    vaccine_type_VPI_quantity_available_for_month= models.PositiveSmallIntegerField(default=0)
    vaccine_type_VPI_balance_at_month_end= models.PositiveSmallIntegerField(default=0)
    vaccine_type_VPI_number_of_days_out_of_stock= models.PositiveSmallIntegerField(default=0)
    vaccine_type_Flu_quantity_available_for_month= models.PositiveSmallIntegerField(default=0)
    vaccine_type_Flu_balance_at_month_end= models.PositiveSmallIntegerField(default=0)
    vaccine_type_Flu_number_of_days_out_of_stock= models.PositiveSmallIntegerField(default=0)
    vaccine_type_DTP_quantity_available_for_month= models.PositiveSmallIntegerField(default=0)
    vaccine_type_DTP_balance_at_month_end= models.PositiveSmallIntegerField(default=0)
    vaccine_type_DTP_number_of_days_out_of_stock= models.PositiveSmallIntegerField(default=0)
    vaccine_type_COVID_19_quantity_available_for_month= models.PositiveSmallIntegerField(default=0)
    vaccine_type_COVID_19_balance_at_month_end= models.PositiveSmallIntegerField(default=0)
    vaccine_type_COVID_19_number_of_days_out_of_stock= models.PositiveSmallIntegerField(default=0)
    
    #consumables
    consumable_type_SAB_point_05_ml_quantity_available_for_month= models.PositiveSmallIntegerField(default=0)
    consumable_type_SAB_point_05_ml_balance_at_month_end= models.PositiveSmallIntegerField(default=0)
    consumable_type_SAB_point_05_ml_number_of_days_out_of_stock= models.PositiveSmallIntegerField(default=0)
    consumable_type_SAB_point_5_ml_quantity_available_for_month= models.PositiveSmallIntegerField(default=0)
    consumable_type_SAB_point_5_ml_balance_at_month_end= models.PositiveSmallIntegerField(default=0)
    consumable_type_SAB_point_5_ml_number_of_days_out_of_stock= models.PositiveSmallIntegerField(default=0)
    consumable_type_Sdil_2_ml_quantity_available_for_month= models.PositiveSmallIntegerField(default=0)
    consumable_type_Sdil_2_ml_balance_at_month_end= models.PositiveSmallIntegerField(default=0)
    consumable_type_Sdil_2_ml_number_of_days_out_of_stock= models.PositiveSmallIntegerField(default=0)
    consumable_type_Sdil_5_ml_quantity_available_for_month= models.PositiveSmallIntegerField(default=0)
    consumable_type_Sdil_5_ml_balance_at_month_end= models.PositiveSmallIntegerField(default=0)
    consumable_type_Sdil_5_ml_number_of_days_out_of_stock= models.PositiveSmallIntegerField(default=0)
    consumable_type_Boites_sec_quantity_available_for_month= models.PositiveSmallIntegerField(default=0)
    consumable_type_Boites_sec_balance_at_month_end= models.PositiveSmallIntegerField(default=0)
    consumable_type_Boites_sec_number_of_days_out_of_stock= models.PositiveSmallIntegerField(default=0)
    consumable_type_coton_quantity_available_for_month= models.PositiveSmallIntegerField(default=0)
    consumable_type_coton_balance_at_month_end= models.PositiveSmallIntegerField(default=0)
    consumable_type_coton_number_of_days_out_of_stock= models.PositiveSmallIntegerField(default=0)

    #VACCINATION
    BCG_filles_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    BCG_filles_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    BCG_Garcons_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    BCG_Garcons_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    BCG_doses_vaccines_utilised= models.PositiveSmallIntegerField(default=0)
    BCG_doses_vaccines_administered= models.PositiveSmallIntegerField(default=0)
    VPO_polio_filles_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    VPO_polio_filles_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    VPO_polio_Garcons_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    VPO_polio_Garcons_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    VPO_polio_doses_vaccines_utilised= models.PositiveSmallIntegerField(default=0)
    VPO_polio_doses_vaccines_administered= models.PositiveSmallIntegerField(default=0)
    VPO1_polio_filles_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    VPO1_polio_filles_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    VPO1_polio_Garcons_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    VPO1_polio_Garcons_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    VPO1_polio_doses_vaccines_utilised= models.PositiveSmallIntegerField(default=0)
    VPO1_polio_doses_vaccines_administered= models.PositiveSmallIntegerField(default=0)
    VPO2_polio_filles_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    VPO2_polio_filles_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    VPO2_polio_Garcons_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    VPO2_polio_Garcons_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    VPO2_polio_doses_vaccines_utilised= models.PositiveSmallIntegerField(default=0)
    VPO2_polio_doses_vaccines_administered= models.PositiveSmallIntegerField(default=0)
    rappel_VPO_polio_filles_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    rappel_VPO_polio_filles_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    rappel_VPO_polio_Garcons_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    rappel_VPO_polio_Garcons_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    rappel_VPO_polio_doses_vaccines_utilised= models.PositiveSmallIntegerField(default=0)
    rappel_VPO_polio_doses_vaccines_administered= models.PositiveSmallIntegerField(default=0)
    VPI_filles_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    VPI_filles_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    VPI_Garcons_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    VPI_Garcons_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    VPI_doses_vaccines_utilised= models.PositiveSmallIntegerField(default=0)
    VPI_doses_vaccines_administered= models.PositiveSmallIntegerField(default=0)
    penta_1_filles_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    penta_1_filles_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    penta_1_Garcons_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    penta_1_Garcons_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    penta_1_doses_vaccines_utilised= models.PositiveSmallIntegerField(default=0)
    penta_1_doses_vaccines_administered= models.PositiveSmallIntegerField(default=0)
    penta_2_filles_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    penta_2_filles_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    penta_2_Garcons_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    penta_2_Garcons_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    penta_2_doses_vaccines_utilised= models.PositiveSmallIntegerField(default=0)
    penta_2_doses_vaccines_administered= models.PositiveSmallIntegerField(default=0)
    penta_3_filles_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    penta_3_filles_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    penta_3_Garcons_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    penta_3_Garcons_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    penta_3_doses_vaccines_utilised= models.PositiveSmallIntegerField(default=0)
    penta_3_doses_vaccines_administered= models.PositiveSmallIntegerField(default=0) 
    rota_1_filles_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    rota_1_filles_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    rota_1_Garcons_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    rota_1_Garcons_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    rota_1_doses_vaccines_utilised= models.PositiveSmallIntegerField(default=0)
    rota_1_doses_vaccines_administered= models.PositiveSmallIntegerField(default=0)
    rota_2_filles_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    rota_2_filles_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    rota_2_Garcons_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    rota_2_Garcons_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    rota_2_doses_vaccines_utilised= models.PositiveSmallIntegerField(default=0)
    rota_2_doses_vaccines_administered= models.PositiveSmallIntegerField(default=0)
    RR_1_filles_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    RR_1_filles_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    RR_1_Garcons_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    RR_1_Garcons_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    RR_1_doses_vaccines_utilised= models.PositiveSmallIntegerField(default=0)
    RR_1_doses_vaccines_administered= models.PositiveSmallIntegerField(default=0)
    RR_2_12_32_mois_inst= models.PositiveSmallIntegerField(default=0)
    RR_2_12_32_mois_comm= models.PositiveSmallIntegerField(default=0)
    RR_2_12_23_mois_inst= models.PositiveSmallIntegerField(default=0)
    RR_2_12_23_mois_comm= models.PositiveSmallIntegerField(default=0)
    Pneumo_1_filles_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    Pneumo_1_filles_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    Pneumo_1_Garcons_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    Pneumo_1_Garcons_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    Pneumo_1_doses_vaccines_utilised= models.PositiveSmallIntegerField(default=0)
    Pneumo_1_doses_vaccines_administered= models.PositiveSmallIntegerField(default=0)
    Pneumo_2_filles_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    Pneumo_2_filles_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    Pneumo_2_Garcons_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    Pneumo_2_Garcons_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    Pneumo_2_doses_vaccines_utilised= models.PositiveSmallIntegerField(default=0)
    Pneumo_2_doses_vaccines_administered= models.PositiveSmallIntegerField(default=0)
    Pneumo_3_filles_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    Pneumo_3_filles_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    Pneumo_3_Garcons_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    Pneumo_3_Garcons_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    Pneumo_3_doses_vaccines_utilised= models.PositiveSmallIntegerField(default=0)
    Pneumo_3_doses_vaccines_administered= models.PositiveSmallIntegerField(default=0)
    DTp_Rappel_12_32_mois_inst= models.PositiveSmallIntegerField(default=0)
    DTp_Rappel_12_32_mois_comm= models.PositiveSmallIntegerField(default=0)
    DTp_Rappel_12_23_mois_inst= models.PositiveSmallIntegerField(default=0)
    DTp_Rappel_12_23_mois_comm= models.PositiveSmallIntegerField(default=0)
    ECV_filles_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    ECV_filles_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    ECV_Garcons_0_11_mois_inst= models.PositiveSmallIntegerField(default=0)
    ECV_Garcons_0_11_mois_comm= models.PositiveSmallIntegerField(default=0)
    ECV_doses_vaccines_utilised= models.PositiveSmallIntegerField(default=0)
    ECV_doses_vaccines_administered= models.PositiveSmallIntegerField(default=0)

    dT1_vaccine_femmes_enceites_inst= models.PositiveSmallIntegerField(default=0)
    dT1_vaccine_femmes_enceites_comm= models.PositiveSmallIntegerField(default=0)
    dT2_plus_vaccine_femmes_enceites_inst= models.PositiveSmallIntegerField(default=0)
    dT2_plus_vaccine_femmes_enceites_comm= models.PositiveSmallIntegerField(default=0)
    dT1_dT2_plus_total_vaccine_doses_utilised= models.PositiveSmallIntegerField(default=0)
    dT1_dT2_plus_total_vaccine_doses_administered= models.PositiveSmallIntegerField(default=0)

class Department(models.Model):
    name = models.CharField(unique=True, primary_key=True, max_length=50)
    created_at = models.DateTimeField(editable=False, auto_now_add=True)
    
    def __str__(self):
        return self.name 


class Role(models.Model):
    name = models.CharField(unique=True, primary_key=True, max_length=50)
    created_at = models.DateTimeField(editable=False, auto_now_add=True)
    
    def __str__(self):
        return self.name 

class CustomUser(AbstractUser):
    username = models.CharField(_('username'), unique=True, max_length=50)
    department = models.ForeignKey(Department, on_delete=models.PROTECT, default="Rehab", blank=True)
    role = models.ForeignKey(Role, on_delete=models.PROTECT, default="Staff", blank=True)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()
    
    def __str__(self):
        return "%s %s" % (self.username, self.department)

class CurrentFieldsList(models.Model):
    list = models.JSONField(null=False,blank=False)
    department = models.OneToOneField(Department, on_delete=models.PROTECT)
    created_at = models.DateTimeField(editable=False, auto_now_add=True)
    
    def __str__(self):
        return self.name 

class CaseStudyType(models.Model):
    name = models.CharField(unique=True, primary_key=True, max_length=50)
    created_at = models.DateTimeField(editable=False, auto_now_add=True)
    
    def __str__(self):
        return self.name 

class CaseStudy(models.Model):
    type = models.ForeignKey(CaseStudyType, on_delete=models.PROTECT, default="Patient Story", blank=True)
    title = models.CharField(max_length=50, null=False, blank=False, default="Case Study Title")
    description = models.CharField(max_length=50, null=False, blank=False, default="This is a description of a case study")
    image = models.ImageField(upload_to="uploads/", null=True, default="uploads/default.jpg")